import { connect } from "react-redux";
import StyledSection from "./SchoolCovidStatusStyles";
import { smallDateFormat } from "../../utils/dateFormat";

const SchoolCovidStatus = ({
	rule,
	exceptions,
	extra_rules,
	regions,
	valid_since,
	legal_link,
}) => {
	const { open, otherExceptions } = parseExceptions(exceptions);
	return (
		<StyledSection>
			<h2>Covid Restrictions</h2>
			<div className="rule">{rule}</div>
			<div className="validity">
				<div>
					Valid In: <span>{regions}</span>
				</div>
				<div>
					Valid Since:{" "}
					{smallDateFormat(valid_since) +
						" " +
						new Date(valid_since).getFullYear()}
				</div>
			</div>
			<div className="exceptions">
				Open:
				<ul>
					{open.map((school, i) => (
						<li key={i}>{school}</li>
					))}
				</ul>
				Other Exceptions:
				<ul>
					{otherExceptions.map((exception, i) => (
						<li key={i}>{exception}</li>
					))}
				</ul>
			</div>
			<div className="additional-rules">
				Additional Rules:
				{parseExtraRules(extra_rules).map((rule, i) =>
					typeof rule === "string" ? (
						<div key={i}>{rule}</div>
					) : (
						<ul key={i}>
							{rule.map((r, j) => (
								<li key={j}>{r}</li>
							))}
						</ul>
					)
				)}
			</div>
		</StyledSection>
	);
};

const mapStateToProps = (state) => ({
	rule: state.news.schoolRestrictions.rule,
	regions: state.news.schoolRestrictions.regions,
	exceptions: state.news.schoolRestrictions.exceptions,
	extra_rules: state.news.schoolRestrictions.extra_rules,
	valid_since: state.news.schoolRestrictions.valid_since,
	legal_link: state.news.schoolRestrictions.legal_link,
});

const parseExceptions = (exceptions) => {
	const open = exceptions.split("\n- ").slice(1);
	const [last, otherExceptions] = open.pop().split("Druge izjeme:");
	open.push(last);
	return { open, otherExceptions: otherExceptions.split("*").slice(1) };
};

const parseExtraRules = (rules) => {
	const extraRules = [];
	for (let rule of rules.split("\n"))
		if (rule.startsWith("- "))
			if (typeof extraRules[extraRules.length - 1] === "string")
				extraRules.push([rule.replace(/- /, "").replace(/;/, "")]);
			else
				extraRules[extraRules.length - 1].push(
					rule.replace(/- /, "").replace(/;/, "")
				);
		else extraRules.push(rule);
	return extraRules;
};

export default connect(mapStateToProps)(SchoolCovidStatus);
