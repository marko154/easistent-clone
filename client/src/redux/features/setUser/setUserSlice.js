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
		setColor(state, action) {
			return { ...state, ...action.payload };
		},

		resetUser(state, action) {
			return { clientID: null, primary: "#00929c", secondary: "#333333" };
		},
	},
});

export const {
	setClientID,
	setBasicUserData,
	setUserData,
	setColor,
	resetUser,
} = setUserSlice.actions;
export default setUserSlice.reducer;

export const fetchBasicUserData = () => async (dispatch) => {
	try {
		const res = await fetch("/.netlify/functions/app/api/basic-user-data", {
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
		const res = await fetch("/.netlify/functions/app/api/user-data", {
			credentials: "include",
		});
		const userData = await res.json();
		dispatch(setUserData(userData));
	} catch {
		dispatch(setClientID({ xChildID: null, username: "" }));
	}
};

export const logUserOut = () => async (dispatch) => {
	await fetch("/.netlify/functions/app/api/logout", {
		method: "POST",
	});
	dispatch(resetUser());
};

export const setUserColor = (color) => async (dispatch, getState) => {
	dispatch(setColor(color));
	const email = getState().user.email;
	const options = {
		method: "PATCH",
		body: JSON.stringify({ ...color, email }),
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await fetch(
			"/.netlify/functions/app/api/update-color-scheme",
			options
		);
		const val = await res.json();
		console.log(val);
	} catch {
		console.log("Whoopsie");
	}
};
