import { createSlice } from "@reduxjs/toolkit";

const menuItems = [
	{ url: "/", name: "Timetable" },
	{ url: "/grades", name: "Grades" },
	{ url: "/exams", name: "Exams" },
	{ url: "/absences", name: "Absences" },
	{ url: "/homework", name: "Homework" },
	{ url: "/praises-improvements", name: "Praises" },
	{ url: "/covid-news", name: "Covid News" },
];

menuItems.forEach((item, i) => {
	item.order = i;
});

const sideMenuSlice = createSlice({
	name: "sidemenu",
	initialState: { menuItems, isDraggable: false },
	reducers: {
		toggleIsDraggable(state, action) {
			if (action.payload !== undefined)
				return { ...state, isDraggable: action.payload };
			return { ...state, isDraggable: !state.isDraggable };
		},
		setMenuItems(state, action) {
			return { ...state, menuItems: action.payload };
		},
	},
});

export const { toggleIsDraggable, setMenuItems } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
