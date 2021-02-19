import styled from "styled-components";

const StyledChoice = styled.div`
	margin: 25px 0;
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px;
	div {
		padding: 9px;
		text-align: center;
		max-width: 200px;
		width: 35vw;
		font-family: "Open Sans", sans-serif;
		cursor: pointer;
		border: 2px solid ${(props) => props.primary};
		color: ${(props) => props.primary};
		transition: 0.2s ease;
	}
	.active {
		color: white;
		background: ${(props) => props.primary};
	}
`;

export default StyledChoice;
