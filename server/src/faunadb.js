const { Collection, Update } = require("faunadb");
const faunadb = require("faunadb");
const { Get, Match, Index, Create, Select } = faunadb.query;

const secret = process.env.FAUNADB_SECRET;
const client = new faunadb.Client({
	secret,
});

const createUser = async ({ email, primary, secondary, school }) => {
	try {
		await client.query(
			Create(Collection("users"), {
				data: {
					email,
					primary,
					secondary,
					school,
				},
			})
		);
	} catch (e) {
		console.log(e);
	}
};

const getColorScheme = async (email) => {
	try {
		const doc = await client.query(
			Get(Match(Index("user_by_email"), email))
		);
		const { primary, secondary } = doc.data;
		return { primary, secondary };
	} catch (err) {
		if (err.description === "Set not found.") {
			console.log("CREATING USER");
			createUser({
				email,
				primary: "#00929c",
				secondary: "#333333",
				school: "",
			});
		} else {
			console.log(err);
		}
		return { primary: "#00929c", secondary: "#333333" };
	}
};

const setSchool = async (email, school) => {
	try {
		await client.query(
			Update(Select(["ref"], Get(Match(Index("user_by_email"), email))), {
				data: { school },
			})
		);
	} catch (e) {
		console.log(e);
	}
};

const setColorScheme = async (email, color) => {
	try {
		await client.query(
			Update(Select(["ref"], Get(Match(Index("user_by_email"), email))), {
				data: color,
			})
		);
	} catch (e) {
		console.log(e);
	}
};

module.exports = {
	getColorScheme,
	setColorScheme,
	setSchool,
};
