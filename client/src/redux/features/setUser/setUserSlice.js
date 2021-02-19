import { createSlice } from "@reduxjs/toolkit";

const setUserSlice = createSlice({
	name: "user",
	initialState: { clientID: null, primary: "#00929c", secondary: "#333333" },
	reducers: {
		setClientID(state, action) {
			return {
				...state,
				clientID: action.payload.xChildID,
				username: action.payload.username,
			};
		},
		setBasicUserData(state, action) {
			return {
				...state,
				...action.payload,
			};
		},
		setUserData(state, action) {
			return { ...state, ...action.payload };
		},
		setPrimaryColor(state, action) {
			return { ...state, primary: action.payload };
		},
		setSecondaryColor(state, action) {
			return { ...state, secondary: action.payload };
		},
	},
});

export const {
	setClientID,
	setBasicUserData,
	setUserData,
	setPrimaryColor,
	setSecondaryColor,
} = setUserSlice.actions;
export default setUserSlice.reducer;

export const fetchBasicUserData = () => async (dispatch) => {
	try {
		const res = await fetch("/api/basic-user-data", {
			credentials: "include",
		});
		const userBasicData = await res.json();
		if (userBasicData.error)
			return dispatch(setClientID({ xChildID: null, username: "" }));
		dispatch(setBasicUserData(userBasicData));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};

export const fetchUserData = () => async (dispatch) => {
	try {
		const res = await fetch("/api/user-data", { credentials: "include" });
		const userData = await res.json();
		dispatch(setUserData(userData));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};
