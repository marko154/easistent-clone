import styled from "styled-components";
import shade from "../../utils/color";

const StyledSideMenu = styled.menu`
	margin: 0;
	padding: 0;
	position: fixed;
	height: calc(100vh - 60px);
	width: ${(props) => props.width};
	background: ${(props) => props.bg};
	color: white;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	font-display: swap;
	transition: 0.15s ease;
	z-index: 1;
	@keyframes appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			width: 250px;
		}
	}

	a {
		padding: 22px 25px 22px 40px;
		color: white;
		text-decoration: none;
		font-family: "Open Sans", sans-serif;
		transition: 0.05s ease;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		height: 66px;

		div svg {
			padding-right: 7px;
			color: white;
		}

		&:hover {
			background: ${(props) => shade(props.bg, 40)};
		}
	}
	.active {
		background: ${(props) => shade(props.bg, 40)};
	}

	.save-layout {
		width: 90%;
		margin-top: 40px;
		margin-left: 5%;
		background: ${(props) => props.primary};
		padding: 7px;
		border: none;
		font-family: "Open Sans", sans-serif;
		font-size: 0.93rem;
		outline: none;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 12px;
		cursor: pointer;
		transition: 0.1s ease;

		&:hover {
			background: ${(props) => shade(props.primary, -10)};
			box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 20px;
		}
	}

	@media screen and (max-width: 800px) {
		animation: none;
		height: calc(100vh - 55px);
	}
`;

export default StyledSideMenu;
