import { connect } from "react-redux";
import styled from "styled-components";
import shade from "../../utils/color";

const StyledUserDropdown = styled.div`
	position: absolute;
	top: 58px;
	left: calc(100vw - 260px);
	width: 250px;
	overflow: hidden;
	font-family: "Open Sans", sans-serif;
	background: ${(props) => props.secondaryColor};
	color: white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	animation: fade-pop 0.15s ease;
	transition: height 0.25s ease;
	display: flex;
	z-index: 1;
	height: ${(props) => props.height}px;
	a {
		color: white;
	}

	div {
		width: 100%;
		transition: 0.3s ease;
		div {
			padding: 13px 15px;
			cursor: pointer;
			&:hover {
				background: ${(props) => shade(props.secondaryColor, 50)};
			}

			svg {
				padding-right: 6px;
			}
		}
	}
	@media screen and (max-width: 800px) {
		top: 52px;
	}

	.menu-primary-enter {
		position: absolute;
		transform: translateX(-110%);
		transition: 0.3s ease;
	}
	.menu-primary-enter-active {
		transform: translateX(0%);
		transition: 0.3s ease;
	}
	.menu-primary-exit {
		position: absolute;
		transform: translateX(0%);
		transition: 0.3s ease;
	}
	.menu-primary-exit-active {
		transform: translateX(-110%);
		transition: 0.3s ease;
	}

	.menu-settings-enter {
		position: absolute;
		transform: translateX(110%);
		transition: 0.3s ease;
	}
	.menu-settings-enter-active {
		transform: translateX(0%);
		transition: 0.3s ease;
	}
	.menu-settings-exit {
		position: absolute;
		transform: translateX(0%);
		transition: 0.3s ease;
	}
	.menu-settings-exit-active {
		transform: translateX(110%);
		transition: 0.3s ease;
	}

	@keyframes fade-pop {
		0% {
			transform: scale(0.9);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

const mapStateToProps = (state) => ({
	secondaryColor: state.user.secondary,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
	StyledUserDropdown
);
