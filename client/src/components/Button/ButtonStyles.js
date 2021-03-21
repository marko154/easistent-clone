import styled from "styled-components";
import shade from "../../utils/color";
import { connect } from "react-redux";

const StyledButton = styled.button`
	border: none;
	color: white;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	outline: none;
	width: ${(props) => props.width}px;
	margin-top: ${(props) => props.marginTop}px;
	padding: 10px 15px;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
	background: ${(props) => props.primary};
	transition: 0.07s ease-in-out;
	font-family: "Open Sans", sans-serif;
	font-display: swap;
	transition: 0.07s ease-in-out;

	&:hover,
	&:focus {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
		outline: none;
		background: ${(props) => shade(props.primary, -10)};
	}

	@media screen and (max-width: 500px) {
		width: calc(70vw + 20px);
	}
	& > .ripple {
		width: 20px;
		height: 20px;
		position: absolute;
		background: ${(props) => shade(props.primary, 20)};
		display: block;
		content: "";
		border-radius: 9999px;
		opacity: 1;
		animation: 0.8s ease 1 forwards ripple-effect;
	}
	& > .content {
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 2;
		pointer-events: none;
	}

	@keyframes ripple-effect {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(20);
			opacity: 0.375;
		}
		100% {
			transform: scale(50);
			opacity: 0;
		}
	}
`;

const mapStateToProps = (state) => ({
	primary: state.user.primary,
});

export default connect(mapStateToProps)(StyledButton);
