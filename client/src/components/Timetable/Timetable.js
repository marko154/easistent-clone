import { memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setAnimationDirection } from "../../redux/features/timetable/setTimetableSlice";
import { CSSTransition } from "react-transition-group";
import TimetableHour from "./TimetableHour";
import { smallDateFormat } from "../../utils/dateFormat";
import StyledTimetable from "./TimetableStyles";

const Timetable = ({
	all_day_events,
	day_table,
	events,
	school_hour_events,
	time_table,
	animationDirection,
	from,
	setAnimationDirection,
}) => {
	const [showTable, setShowTable] = useState(false);

	useEffect(() => {
		setShowTable(false);
		setTimeout(() => setShowTable(true), 250);
	}, [from]);

	useEffect(() => {
		return () => setAnimationDirection("");
	}, [setAnimationDirection]);

	return (
		<StyledTimetable
			numOfDays={day_table ? day_table.length : 0}
			animDir={animationDirection}
		>
			{time_table && (
				<>
					<div className="row day-names">
						<div className="day-name"></div>
						{day_table.map((day, i) => (
							<div className="day-name" key={i}>
								<span className="name">{day.name}</span>
								<div>{smallDateFormat(day.date)}</div>
							</div>
						))}
					</div>
					<CSSTransition
						unmountOnExit
						timeout={250}
						in={animationDirection === "" ? true : showTable}
						classNames={
							animationDirection
								? animationDirection === "left"
									? "timetable-left"
									: "timetable-right"
								: ""
						}
					>
						<div className="timetable-wrapper">
							{time_table.map((hour) => (
								<div key={hour.id} className="row">
									<div className="from-to">
										<span className="number">
											{hour.name && hour.name + "."}
										</span>
										<span className="time">{`${hour.time.from} - ${hour.time.to}`}</span>
									</div>
									{day_table.map((day) => (
										<TimetableHour
											key={day.name}
											date={day.date}
											events={events}
											from={hour.time.from}
											to={hour.time.to}
											all_day_events={all_day_events}
											hourData={school_hour_events.filter(
												(lesson) =>
													lesson.time.date ===
														day.date &&
													lesson.time.from_id ===
														hour.id
											)}
										/>
									))}
								</div>
							))}
						</div>
					</CSSTransition>
				</>
			)}
		</StyledTimetable>
	);
};

const mapStateToProps = (state) => ({
	animationDirection: state.timetable.animationDirection,
	from: state.timetable.week.from,
});

const mapDispatchToProps = (dispatch) => ({
	setAnimationDirection: (val) => dispatch(setAnimationDirection(val)),
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(Timetable));
