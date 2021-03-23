import { createSlice } from "@reduxjs/toolkit";
import { easistentApiFormat } from "../../../utils/dateFormat";

const setNewsSlice = createSlice({
	name: "news",
	initialState: {
		news: [],
		summary: {},
		schoolCases: {},
		schoolRestrictions: {},
	},
	reducers: {
		setNews(state, action) {
			return { ...state, ...action.payload };
		},
	},
});

export const { setNews } = setNewsSlice.actions;
export default setNewsSlice.reducer;

export const fetchNews = () => async (dispatch) => {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 3);
	const responses = await Promise.all([
		fetch("https://api.sledilnik.org/api/summary"),
		fetch(
			`https://api.sledilnik.org/api/schools?from=${easistentApiFormat(
				yesterday
			)}&to=${easistentApiFormat(new Date())}`
		),
		fetch("https://backend.sledilnik.org/api/v1/restrictions/21/"),
	]);
	const [summary, schoolCases, schoolRestrictions] = await Promise.all(
		responses.map((res) => res.json())
	);
	console.log({ schoolCases });
	dispatch(
		setNews({
			casesToday: summary.testsToday.subValues,
			sevenDayAvg: summary.casesAvg7Days.value,
			totalVaccinations: summary.vaccinationSummary.value,
			schoolCases: schoolCases.pop().schoolType,
			schoolRestrictions: {
				...schoolRestrictions,
			},
		})
	);
	try {
		const newsRes = await fetch("/.netlify/functions/app/news/24ur");
		const news = await newsRes.json();
		dispatch(setNews({ news }));
	} catch {
		console.log("whoopsie");
	}
};
