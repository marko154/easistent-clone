import styled from "styled-components";

const StyledPage = styled.div`
	margin-left: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 65px);
	overflow-y: auto;
	overflow-x: hidden;

	.no-content {
		margin-top: 100px;
		font-size: 2rem;
		font-family: "Open Sans", sans-serif;
		color: #444;
	}

	@media screen and (max-width: 800px) {
		margin-left: 0;
		height: calc(100vh - 60px);
	}
`;

export default StyledPage;
