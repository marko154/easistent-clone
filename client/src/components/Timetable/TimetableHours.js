export const TimetableHourNormal = ({ hourData }) => (
	<div
		style={{
			background:
				hourData.hour_special_type === "cancelled"
					? "#999"
					: hourData.color,
		}}
		className="hour"
	>
		<div>
			<div
				className="special-type"
				style={{
					borderTopColor: typeColor[hourData.hour_special_type],
				}}
			></div>

			<div className="subject-classroom">
				<span className="subject">{hourData.subject.name}</span>
				<span className="classroom">{hourData.classroom.name}</span>
			</div>
			<div className="teacher">
				{window.innerWidth > 800
					? hourData.teachers[0].name
					: hourData.teachers[0].name
							.split(" ")
							.map((w) => w[0])
							.join("")}
			</div>
		</div>
	</div>
);

export const TimetableHourSplit = ({ hourData, numOfDays }) => (
	<div
		style={{
			background:
				hourData.hour_special_type === "cancelled"
					? "#999"
					: hourData.color,
		}}
		className="split-hour"
	>
		<div>
			<div
				className="special-type"
				style={{
					borderTopColor: typeColor[hourData.hour_special_type],
				}}
			></div>

			<div className="subject-classroom">
				<span className="subject">{hourData.subject.name}</span>
				<span className="classroom">{hourData.classroom.name}</span>
			</div>
			<div className="teacher">
				{window.innerWidth > 800
					? hourData.teachers[0].name
					: hourData.teachers[0].name
							.split(" ")
							.map((w) => w[0])
							.join("")}
			</div>
		</div>
	</div>
);

const typeColor = {
	exam: "white",
	substitution: "#333",
	cancelled: "transparent",
};
