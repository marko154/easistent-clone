import { createSlice } from "@reduxjs/toolkit";
import { setClientID } from "../setUser/setUserSlice";

const setExamsSlice = createSlice({
	name: "exams",
	initialState: { past: null, future: null },
	reducers: {
		setExams(state, action) {
			return action.payload;
		},
	},
});

export const { setExams } = setExamsSlice.actions;
export default setExamsSlice.reducer;

export const fetchExams = () => async (dispatch) => {
	try {
		const res = await fetch("/.netlify/functions/app/api/exams", { credentials: "include" });
		const exams = await res.json();
		if (exams.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		dispatch(setExams(exams));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
