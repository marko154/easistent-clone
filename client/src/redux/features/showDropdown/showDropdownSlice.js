import { createSlice } from "@reduxjs/toolkit";

const showDropdownSlice = createSlice({
	name: "userDropdown",
	initialState: false,
	reducers: {
		toggleShowDropdown(state, action) {
			if (action.payload) return action.payload;
			return !state;
		},
	},
});

export const { toggleShowDropdown } = showDropdownSlice.actions;
export default showDropdownSlice.reducer;
