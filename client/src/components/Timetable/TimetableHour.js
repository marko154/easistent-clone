import { TimetableHourNormal, TimetableHourSplit } from "./TimetableHours";
import inRange from "../../utils/timetable";

const TimetableHour = ({
	hourData,
	date,
	all_day_events,
	events,
	from,
	to,
}) => {
	const isNow =
		new Date(`${date} ${from}`) < new Date() &&
		new Date(`${date} ${to}`) > new Date();
	const allDayEvent = all_day_events.find((event) => event.date === date);

	let event = null;
	if (events.length > 0)
		event = events.find(
			(event) => event.date === date && inRange(event.time, from, to)
		);
	return (
		<div style={{ display: "flex", position: "relative" }}>
			{isNow && (
				<div
					className="time-indicator"
					style={{
						top:
							(new Date() - new Date(`${date} ${from}`)) /
								600 /
								45 +
							"%",
					}}
				>
					<div className="ball"></div>
					<div className="ball"></div>
				</div>
			)}

			{hourData.length === 0 ? (
				allDayEvent ? (
					<div className="hour all-day-event">
						<div>{allDayEvent.name}</div>
						<div>
							{allDayEvent.teachers.length
								? allDayEvent.teachers[0].name
								: ""}
						</div>
					</div>
				) : event ? (
					<div className="hour event">
						<div>{event.name}</div>
						<div>{event.teachers[0].name}</div>
					</div>
				) : (
					<div className="hour"></div>
				)
			) : hourData.length === 1 ? (
				<TimetableHourNormal hourData={hourData[0]} />
			) : (
				<>
					<TimetableHourSplit hourData={hourData[0]} />
					<TimetableHourSplit hourData={hourData[1]} />
				</>
			)}
		</div>
	);
};

TimetableHour.defaultProps = {
	hourData: { color: "white" },
};

export default TimetableHour;
