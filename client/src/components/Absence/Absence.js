import { useState } from "react";
import { connect } from "react-redux";
import { FaCalendarTimes } from "react-icons/fa";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import { formatDate } from "../../utils/dateFormat";
import StyledAbsence from "./AbsenceStyles";

const Absence = ({
	date,
	excuse_description,
	state,
	hours,
	missing_count,
	primaryColor,
}) => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<StyledAbsence primaryColor={primaryColor}>
			<div
				onClick={() => setShowDetails(!showDetails)}
				className="summary"
			>
				{" "}
				<FaCalendarTimes />
				<p>{formatDate(date)}</p>
				<p>Lessons: {missing_count}</p>
				<p>{state}</p>
				{showDetails ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
			</div>

			<CSSTransition
				unmountOnExit
				timeout={250}
				in={showDetails}
				classNames="details"
			>
				<div>
					{excuse_description && (
						<p style={{ color: primaryColor }}>
							Description: {excuse_description}
						</p>
					)}
					{hours.map((hour, i) => (
						<div className="hour" key={i}>
							{formatLesson(hour)}
						</div>
					))}
				</div>
			</CSSTransition>
		</StyledAbsence>
	);
};

const formatLesson = ({ class_name, from, to, state }) => {
	if (class_name === null) class_name = "";
	if (state === null) state = "";
	return `${class_name} ${from} - ${to} ${state}`;
};

const mapStateToProps = (state) => ({
	primaryColor: state.user.primary,
});

export default connect(mapStateToProps)(Absence);
