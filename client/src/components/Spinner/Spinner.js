import StyledSpinner from "./SpinnerStyles";

const Spinner = ({ size = 60, offsetX = 0, color }) => (
	<StyledSpinner size={size} offsetX={offsetX} color={color}>
		<div className="sk-circle1 sk-child"></div>
		<div className="sk-circle2 sk-child"></div>
		<div className="sk-circle3 sk-child"></div>
		<div className="sk-circle4 sk-child"></div>
		<div className="sk-circle5 sk-child"></div>
		<div className="sk-circle6 sk-child"></div>
		<div className="sk-circle7 sk-child"></div>
		<div className="sk-circle8 sk-child"></div>
		<div className="sk-circle9 sk-child"></div>
		<div className="sk-circle10 sk-child"></div>
		<div className="sk-circle11 sk-child"></div>
		<div className="sk-circle12 sk-child"></div>
	</StyledSpinner>
);

export default Spinner;
