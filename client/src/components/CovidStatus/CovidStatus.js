import StyledCovidStatus from "./CovidStatusStyles";
import { connect } from "react-redux";
import { useState } from "react";

const CovidStatus = ({
	casesToday,
	sevenDayAvg,
	totalVaccinations,
	schoolCases,
}) => {
	const [tooltip, setTooltip] = useState("");
	return (
		<StyledCovidStatus
			kindergarten={schoolCases.kindergarten.attendees.active}
			elementary={schoolCases.elementary.attendees.active}
			elementary_special={schoolCases.elementary_special.attendees.active}
			highschool={schoolCases.highschool.attendees.active}
		>
			<div>
				<div className="new-cases">
					<div>Daily cases </div>
					{casesToday.positive}
				</div>
				<div>
					<div>7 Day Average</div>
					{Math.round(sevenDayAvg * 100) / 100}
				</div>
				<div>
					<div>Vaccinations</div>
					{totalVaccinations}
				</div>
			</div>
			<h3>Active School Cases</h3>
			<div className="active-school-cases">
				<div
					onMouseEnter={() => setTooltip("kindergarten")}
					onMouseLeave={() => setTooltip("")}
				>
					{tooltip === "kindergarten" && <div>Kindergarten</div>}
				</div>
				<div
					onMouseEnter={() => setTooltip("elementary")}
					onMouseLeave={() => setTooltip("")}
				>
					{tooltip === "elementary" && <div>Elementary Schools</div>}
				</div>
				<div
					onMouseEnter={() => setTooltip("special")}
					onMouseLeave={() => setTooltip("")}
				>
					{tooltip === "special" && <div>Special Needs Schools</div>}
				</div>
				<div
					onMouseEnter={() => setTooltip("highschool")}
					onMouseLeave={() => setTooltip("")}
				>
					{tooltip === "highschool" && <div>Highschools</div>}
				</div>
			</div>
			<div className="legend">
				<div>
					<div style={{ background: "#5cdb95" }}></div>Kindergartens
				</div>
				<div>
					<div style={{ background: "#ff4d47" }}></div>Elementary
					Schools
				</div>
				<div>
					<div style={{ background: "#3e5fad" }}></div>Special Needs
					Schools
				</div>
				<div>
					<div style={{ background: "orange" }}></div>Highschools
				</div>
			</div>
		</StyledCovidStatus>
	);
};

const mapStateToProps = (state) => ({
	casesToday: state.news.casesToday,
	sevenDayAvg: state.news.sevenDayAvg,
	totalVaccinations: state.news.totalVaccinations,
	schoolCases: state.news.schoolCases,
});

export default connect(mapStateToProps)(CovidStatus);
// cases today, 7 day average, total vaccinations
