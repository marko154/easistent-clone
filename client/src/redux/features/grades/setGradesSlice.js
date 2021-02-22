import { createSlice } from "@reduxjs/toolkit";
import { setClientID } from "../setUser/setUserSlice";

const setGradesSlice = createSlice({
	name: "grades",
	initialState: null,
	reducers: {
		setGrades(state, action) {
			return action.payload;
		},
	},
});

export const { setGrades } = setGradesSlice.actions;
export default setGradesSlice.reducer;

export const fetchGrades = () => async (dispatch) => {
	try {
		const res = await fetch("/.netlify/functions/app/api/grades", { credentials: "include" });
		const grades = await res.json();
		if (grades.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		dispatch(setGrades(grades));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
