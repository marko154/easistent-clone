import styled from "styled-components";

const StyledColorPicker = styled.div`
	position: absolute;
	top: 58px;
	width: 183px;
	right: 260px;
	display: flex;
	flex-wrap: wrap;
	background: rgb(28, 28, 28);
	padding: 2px;
	animation: 0.3s fade-pop ease;
	height: 188px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	div {
		height: 55px;
		width: 55px;
		margin: 3px;
		border-radius: 3px;
		cursor: pointer;
		transition: 0.06s ease;
		&:hover {
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			transform: scale(1.05);
			outline: 1px solid rgba(100, 162, 255, 0.8);
		}
	}

	@media screen and (max-width: 800px) {
		width: 245px;
		top: 243px;
		right: 10px;
	}
`;

export default StyledColorPicker;
