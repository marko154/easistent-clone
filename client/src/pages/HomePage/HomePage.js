import { useState, createRef, useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { toggleShowDropdown } from "../../redux/features/showDropdown/showDropdownSlice";
import { fetchBasicUserData } from "../../redux/features/setUser/setUserSlice";
import { setWeek } from "../../redux/features/timetable/setTimetableSlice";
import { Switch, Route, Redirect } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopBar from "../../components/TopBar/TopBar";
import UserDropdown from "../../components/UserDropdown/UserDropdown";

const TimetablePage = lazy(() => import("../TimetablePage/TimetablePage"));
const GradesPage = lazy(() => import("../GradesPage/GradesPage"));
const ExamsPage = lazy(() => import("../ExamsPage/ExamsPage"));
const AbsencesPage = lazy(() => import("../AbsencesPage/AbsencesPage"));
const HomeworkPage = lazy(() => import("../HomeworkPage/HomeworkPage"));
const PraisesPage = lazy(() => import("../PraisesPage/PraisesPage"));
const CovidNews = lazy(() => import("../CovidNewsPage/CovidNews"));
const UserDataPage = lazy(() => import("../UserDataPage/UserDataPage"));

const HomePage = ({
	showDropdown,
	dispatch,
	windowData,
	isLoggedIn,
	history,
}) => {
	const [dropDown] = useState(createRef());
	const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 800);

	useEffect(() => {
		if (!isLoggedIn) history.push("/login");
		const toggleDropdown = (event) => {
			if (dropDown.current && !dropDown.current.contains(event.target)) {
				const colorPicker = document.querySelector("#color-picker");
				if (!colorPicker || !colorPicker.contains(event.target))
					dispatch(toggleShowDropdown());
			}
		};

		if (showDropdown) {
			document.addEventListener("mousedown", toggleDropdown);
			document.addEventListener("pointerdown", toggleDropdown);
		}
		return () => {
			document.removeEventListener("mousedown", toggleDropdown);
			document.removeEventListener("pointerdown", toggleDropdown);
		};
	}, [showDropdown, dispatch, dropDown, isLoggedIn, history]);

	useEffect(() => {
		dispatch(fetchBasicUserData());
		dispatch(setWeek());
	}, [dispatch]);

	const closeMenu = (e) => {
		if (window.innerWidth < 800 && e.clientX > 250) setIsMenuOpen(false);
	};

	return (
		<>
			<TopBar setIsMenuOpen={setIsMenuOpen} isOpen={isMenuOpen} />
			<SideMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<div onPointerDown={closeMenu}>
				<Switch>
					<Suspense fallback={""}>
						<Route exact path="/" component={TimetablePage} />
						<Route exact path="/grades" component={GradesPage} />
						<Route exact path="/exams" component={ExamsPage} />
						<Route
							exact
							path="/absences"
							component={AbsencesPage}
						/>
						<Route
							exact
							path="/homework"
							component={HomeworkPage}
						/>
						<Route
							exact
							path="/praises-improvements"
							component={PraisesPage}
						/>
						<Route exact path="/covid-news" component={CovidNews} />
						<Route
							exact
							path="/user-data"
							component={UserDataPage}
						/>
					</Suspense>
					<Redirect to="/404" />
				</Switch>
				{showDropdown && <UserDropdown ref={dropDown} />}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	showDropdown: state.showDropdown,
	windowData: state.window,
	isLoggedIn: state.user.clientID,
});

export default connect(mapStateToProps)(HomePage);
