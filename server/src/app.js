const express = require("express");
const serverless = require("serverless-http");
const cookieParser = require("cookie-parser");
const { getAccessToken, easistentRequest } = require("./easistentAPI.js");
const { getUserData } = require("./easistentUserData.js");
const { getNews } = require("./newsScraper/24ur.js");

const PORT = process.env.PORT || 3001;

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cookieParser());

router.post("/api/auth", async (req, res) => {
	const { username, password } = req.body;
	// get access token and x-child-id to store on the client
	const { token, xChildID, sessionID, error } = await getAccessToken(
		username,
		password
	);
	if (error) return res.json({ error });
	res.cookie("token", token, { maxAge: 86_400_000, httpOnly: true });
	res.cookie("xChildID", xChildID, { maxAge: 86_400_000, httpOnly: true });
	res.cookie("sessionID", sessionID, { maxAge: 86_400_000, httpOnly: true });
	res.json({ xChildID });
});

router.get("/api/basic-user-data", async (req, res) => {
	const data = await easistentRequest(req.cookies, "/m/me/child");
	res.json(data);
});

router.get("/api/user-data", async (req, res) => {
	const userData = await getUserData(req.cookies.sessionID);
	res.json(userData);
});

router.get("/api/timetable", async (req, res) => {
	const { from, to } = req.query;
	const timetable = await easistentRequest(
		req.cookies,
		`/m/timetable/weekly?from=${from}&to=${to}`
	);
	res.json(timetable);
});

router.get("/api/grades", async (req, res) => {
	const grades = await easistentRequest(req.cookies, "/m/grades");
	res.json(grades.items);
});

router.get("/api/exams", async (req, res) => {
	const [past, future] = await Promise.all([
		easistentRequest(req.cookies, "/m/evaluations?filter=past"),
		easistentRequest(req.cookies, "/m/evaluations?filter=future"),
	]);
	res.json({ past: past.items, future: future.items });
});

router.get("/api/student-data", async (req, res) => {
	const studentData = await easistentRequest(res.cookies, "/m/me/child");
	res.json(studentData);
});

router.get("/api/absences", async (req, res) => {
	const absences = await easistentRequest(req.cookies, "/m/absences");
	res.json(absences);
});

router.get("/api/homework", async (req, res) => {
	const homework = await easistentRequest(req.cookies, "/m/homework");
	res.json(homework);
});

router.get("/api/praises-improvements", async (req, res) => {
	const praisesImprovements = await easistentRequest(
		req.cookies,
		"/m/praises_and_improvements"
	);
	res.json(praisesImprovements.items);
});

router.get("/news/24ur", async (req, res) => {
	const articles = await getNews();
	if (articles === null)
		res.status(500).json({ error: "some shit with request" });
	else res.json(articles);
});

router.use((req, res, next) => {
	res.status(404).send("It appears that you have fucked up.");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

// app.listen(PORT, () => {
// 	console.log(`Example app listening at http://localhost:${PORT}`);
// });
