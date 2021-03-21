import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTimetable } from "../../redux/features/timetable/setTimetableSlice";
import Spinner from "../../components/Spinner/Spinner";
import Timetable from "../../components/Timetable/Timetable";
import SelectWeek from "../../components/SelectWeek/SelectWeek";
import StyledPage from "../PageStyles";

const TimetablePage = ({ timetable, setTimetable, week }) => {
	useEffect(() => {
		setTimetable(week);
	}, [setTimetable, week]);

	return (
		<StyledPage style={{ overflowY: "scroll" }}>
			<SelectWeek week={week} />
			{timetable ? <Timetable {...timetable} /> : <Spinner />}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	timetable: state.timetable.timetable,
	week: state.timetable.week,
});

const mapDispatchToProps = (dispatch) => ({
	setTimetable: (args) => dispatch(fetchTimetable(args)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePage);
