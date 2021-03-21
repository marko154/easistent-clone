import cheerio from "cheerio";
import fetch from "node-fetch";

const fields = [
	"priimek",
	"datum_rojstva",
	"emso",
	"ulica",
	"hisna_stevilka",
	"postna",
	"posta",
	"kraj",
	"drzava",
	"mobitel",
	"telefon",
	"davcna",
];

export const getUserData = async (easistent_session) => {
	const res = await fetch("https://www.easistent.com/nastavitve_uporabnika", {
		headers: {
			cookie: `${easistent_session}`,
		},
	});
	const html = await res.text();
	const $ = cheerio.load(html);
	const email = $(".middle b").last().text();
	const school = $("#izbirnik_sole").first().text().trim();
	console.log("school", school);
	return fields.reduce(
		(data, field) => ({
			...data,
			[field]: $(`input[name=${field}]`).attr("value"),
		}),
		{ email, school }
	);
};
