import { createSlice } from "@reduxjs/toolkit";
import { setClientID } from "../setUser/setUserSlice";

const homeworkSlice = createSlice({
	name: "homework",
	initialState: null,
	reducers: {
		setHomework(state, action) {
			return action.payload;
		},
	},
});

export const { setHomework } = homeworkSlice.actions;
export default homeworkSlice.reducer;

export const fetchHomework = () => async (dispatch) => {
	try {
		const res = await fetch("/api/homework");
		const homework = await res.json();
		if (homework.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		dispatch(setHomework(homework));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
