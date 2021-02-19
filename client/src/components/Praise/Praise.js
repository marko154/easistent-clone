import { useState } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import StyledPraise from "./PraiseStyles";
import { formatDate } from "../../utils/dateFormat";

const Praise = ({ author, date, course, category, text, primaryColor }) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<StyledPraise primary={primaryColor}>
			<div
				className="summary"
				onClick={() => setShowDetails(!showDetails)}
			>
				<div className="date">{formatDate(date)}</div>
				<div className="author">
					{author}, {course}
				</div>
				<div className="category">{category}</div>
				<div className="arrow">
					{showDetails ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
				</div>
			</div>
			<CSSTransition
				unmountOnExit
				timeout={250}
				in={showDetails}
				classNames="description-animation"
			>
				<div className="description">{text}</div>
			</CSSTransition>
		</StyledPraise>
	);
};

const mapStateToProps = (state) => ({
	primaryColor: state.user.primary,
});

export default connect(mapStateToProps)(Praise);
