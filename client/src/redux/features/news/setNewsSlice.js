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
			return action.payload;
		},
	},
});

export const { setNews } = setNewsSlice.actions;
export default setNewsSlice.reducer;

export const fetchNews = () => async (dispatch) => {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 2);
	const responses = await Promise.all([
		fetch("https://api.sledilnik.org/api/summary"),
		fetch(
			`https://api.sledilnik.org/api/schools?from=${easistentApiFormat(
				yesterday
			)}&to=${easistentApiFormat(new Date())}`
		),
		fetch("https://backend.sledilnik.org/api/v1/restrictions/21/"),
		fetch("/news/24ur"),
	]);
	const [summary, schoolCases, schoolRestrictions, news] = await Promise.all(
		responses.map((res) => res.json())
	);
	const {
		rule,
		exceptions,
		extra_rules,
		regions,
		valid_since,
		valid_until,
		legal_link,
	} = schoolRestrictions;
	dispatch(
		setNews({
			casesToday: summary.testsToday.subValues,
			sevenDayAvg: summary.casesAvg7Days.value,
			totalVaccinations: summary.vaccinationSummary.value,
			schoolCases: schoolCases.pop().schoolType,
			schoolRestrictions: {
				rule,
				exceptions,
				extra_rules,
				regions,
				valid_since,
				valid_until,
				legal_link,
			},
			news,
		})
	);
};
