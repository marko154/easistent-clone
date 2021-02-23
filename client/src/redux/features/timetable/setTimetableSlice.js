import { createSlice } from "@reduxjs/toolkit";
import { setClientID } from "../setUser/setUserSlice";
import { getWeekFromDate } from "../../../utils/dateFormat";

const setTimetableSlice = createSlice({
	name: "timetable",
	initialState: {
		week: { from: null, to: null },
		timetable: null,
		animationDirection: "",
	},
	reducers: {
		setTimetable(state, action) {
			return { ...state, timetable: action.payload };
		},
		setWeek(state, action) {
			if (!action.payload)
				return { ...state, week: getWeekFromDate(new Date()) };
			let animationDirection;
			if (new Date(state.week.from) < new Date(action.payload.from))
				animationDirection = "left";
			else animationDirection = "right";
			return { ...state, week: action.payload, animationDirection };
		},
		setAnimationDirection(state, action) {
			return { ...state, animationDirection: action.payload };
		},
	},
});

export const {
	setTimetable,
	setWeek,
	setAnimationDirection,
} = setTimetableSlice.actions;
export default setTimetableSlice.reducer;

const memo = {};

export const fetchTimetable = (week) => async (dispatch) => {
	if (week.from in memo) return dispatch(setTimetable(memo[week.from]));
	try {
		const res = await fetch(
			`/.netlify/functions/app/api/timetable?from=${week.from}&to=${week.to}`,
			{ credentials: "include" }
		);
		const timetable = await res.json();

		if (timetable.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		memo[week.from] = timetable;
		dispatch(setTimetable(timetable));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
