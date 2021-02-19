import { memo } from "react";
import { connect } from "react-redux";
import { setWeek } from "../../redux/features/timetable/setTimetableSlice";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import StyledSelectWeek from "./SelectWeekStyles";
import {
	getWeeks,
	smallDateFormat,
	getWeekFromDate,
} from "../../utils/dateFormat";

const SelectWeek = ({ setWeek, week }) => {
	const handleChangeWeek = (e) => {
		const [from, to] = e.target.value.split(" ");
		setWeek({ from, to });
	};

	const handleChangeWeekByDate = (e) => {
		setWeek(getWeekFromDate(e.target.value));
	};

	const getPreviousWeek = () => {
		const prevMonday = new Date(week.from);
		prevMonday.setDate(prevMonday.getDate() - 7);
		setWeek(getWeekFromDate(prevMonday));
	};

	const getNextWeek = () => {
		const nextMonday = new Date(week.from);
		nextMonday.setDate(nextMonday.getDate() + 7);
		setWeek(getWeekFromDate(nextMonday));
	};

	return (
		<StyledSelectWeek>
			<AiOutlineArrowLeft onClick={getPreviousWeek} />
			<select
				className="select"
				onChange={handleChangeWeek}
				value={`${week.from} ${week.to}`}
			>
				{getWeeks().map((week, i) => (
					<option key={i} value={`${week.from} ${week.to}`}>
						{`${i + 1}.teden ${smallDateFormat(
							week.from
						)} - ${smallDateFormat(week.to)}`}
					</option>
				))}
			</select>
			<input
				type="date"
				value={week.from || new Date().toDateString()}
				onChange={handleChangeWeekByDate}
			/>
			<AiOutlineArrowRight onClick={getNextWeek} />
		</StyledSelectWeek>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setWeek: (week) => dispatch(setWeek(week)),
});

export default memo(connect(null, mapDispatchToProps)(SelectWeek));
