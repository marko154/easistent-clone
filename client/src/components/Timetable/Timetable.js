import { memo } from "react";
import TimetableHour from "./TimetableHour";
import { smallDateFormat } from "../../utils/dateFormat";
import StyledTimetable from "./TimetableStyles";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";

const Timetable = ({
	all_day_events,
	day_table,
	events,
	school_hour_events,
	time_table,
	isLoading,
}) => {
	return (
		<StyledTimetable
			numOfDays={day_table ? day_table.length : 0}
			isLoading={isLoading}
		>
			{time_table && (
				<div style={{ position: "relative" }}>
					<div className="row day-names">
						<div className="day-name"></div>
						{day_table.map((day, i) => (
							<div className="day-name" key={i}>
								<span className="name">{day.name}</span>
								<div>{smallDateFormat(day.date)}</div>
							</div>
						))}
					</div>
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
												lesson.time.date === day.date &&
												lesson.time.from_id === hour.id
										)}
									/>
								))}
							</div>
						))}
					</div>
					<div
						style={{ position: "absolute", top: 200, left: "50%" }}
					>
						{isLoading && <Spinner color="#555" />}
					</div>
				</div>
			)}
		</StyledTimetable>
	);
};

const mapStateToProps = (state) => ({ isLoading: state.timetable.isLoading });

export default memo(connect(mapStateToProps)(Timetable));
