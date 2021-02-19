import styled from "styled-components";

const StyledSection = styled.section`
	margin: 15px 0;
	width: 600px;
	padding: 15px 0;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	font-family: "Open Sans", sans-serif;
	display: flex;
	justify-content: space-evenly;

	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;

export default StyledSection;
