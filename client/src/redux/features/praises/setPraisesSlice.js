import { createSlice } from "@reduxjs/toolkit";
import { setClientID } from "../setUser/setUserSlice";

const setPraisesSlice = createSlice({
	name: "praises",
	initialState: null,
	reducers: {
		setPraises(state, action) {
			return action.payload;
		},
	},
});

const { setPraises } = setPraisesSlice.actions;
export default setPraisesSlice.reducer;

export const fetchPraises = () => async (dispatch) => {
	try {
		const res = await fetch("/.netlify/functions/app/api/praises-improvements", {
			credentials: "include",
		});
		const praises = await res.json();
		if (praises.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		dispatch(setPraises(praises));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
