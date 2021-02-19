import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxLogger from "redux-logger";
import showDropdownReducer from "./features/showDropdown/showDropdownSlice";
import setUserReducer from "./features/setUser/setUserSlice";
import setTimetableReducer from "./features/timetable/setTimetableSlice";
import setGradesReducer from "./features/grades/setGradesSlice";
import setExamsReducer from "./features/exams/setExamsSlice";
import setAbsencesReducer from "./features/absences/setAbsencesSlice";
import setHomeworkReducer from "./features/homework/homeworkSlice";
import setPraisesReducer from "./features/praises/setPraisesSlice";
import setNewsReducer from "./features/news/setNewsSlice";
import setSideMenuReducer from "./features/sideMenu/sideMenuSlice";

const rootReducer = combineReducers({
	showDropdown: showDropdownReducer,
	user: setUserReducer,
	timetable: setTimetableReducer,
	grades: setGradesReducer,
	exams: setExamsReducer,
	absences: setAbsencesReducer,
	homework: setHomeworkReducer,
	news: setNewsReducer,
	praises: setPraisesReducer,
	sidemenu: setSideMenuReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user", "showDropdown", "sidemenu"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
// set environment variable when in production
if (process.env.NODE_ENV !== "production") middleware.push(reduxLogger);

const store = configureStore({
	reducer: persistedReducer,
	middleware: middleware,
});

const persistor = persistStore(store);

export { store, persistor };
