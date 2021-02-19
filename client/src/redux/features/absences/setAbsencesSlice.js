import { createSlice } from "@reduxjs/toolkit";
import { setClientID } from "../setUser/setUserSlice";

const setAbsencesSlice = createSlice({
	name: "absences",
	initialState: { items: [], summary: null },
	reducers: {
		setAbsences(state, action) {
			return action.payload;
		},
	},
});

export const { setAbsences } = setAbsencesSlice.actions;
export default setAbsencesSlice.reducer;

export const fetchAbsences = () => async (dispatch) => {
	try {
		const res = await fetch("/api/absences", { credentials: "include" });
		const data = await res.json();
		if (data.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		data.items.sort((a, b) => new Date(b.date) - new Date(a.date));
		dispatch(setAbsences(data));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
