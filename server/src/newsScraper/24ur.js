import cheerio from "cheerio";
import fetch from "node-fetch";

const getSummary = async (url) => {
	const response = await fetch(url);
	const html = await response.text();
	const $ = cheerio.load(html);
	const summary = $(".article__summary").text();
	return summary;
};

export async function getNews() {
	try {
		const response = await fetch("https://www.24ur.com/novice/korona");
		const html = await response.text();
		const $ = cheerio.load(html);
		const anchors = $(".splash__item");
		const articles = [];

		anchors.each((i, el) => {
			const articleURL = "https://www.24ur.com/" + $(el).attr("href");
			const articleSummary = getSummary(articleURL);

			articles.push({
				title: $(el).find("h1").text(),
				url: articleURL,
				imgUrl: $(el).find("source").attr("srcset"),
				summary: articleSummary,
			});
		});

		for (let article of articles) article.summary = await article.summary;
		return articles;
	} catch {
		return null;
	}
}
