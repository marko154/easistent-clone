import styled from "styled-components";

const StyledSelectWeek = styled.div`
	display: flex;
	align-items: center;
	margin: 20px;

	svg {
		padding: 0 10px;
		font-size: 1.2rem;
		cursor: pointer;
	}

	input {
		padding: 4px;
		margin: 0 10px;
		font-family: "Open Sans", sans-serif;
		border: 1px solid rgb(199, 199, 199);
		outline: none;

		&:hover {
			border: 1px solid #999;
		}
		@media screen and (max-width: 800px) {
			width: 27vw;
			margin: 0 5px;
		}
	}

	select {
		font-family: "Open Sans", sans-serif;
		width: 200px;
		padding: 5px 10px;
		margin: 0 10px;
		border: 1px solid rgb(199, 199, 199);
		outline: none;
		transition: 0.5s ease;
		option {
			padding: 5px;
		}
		&:hover {
			border: 1px solid #999;
		}
		@media screen and (max-width: 800px) {
			width: 30vw;
			margin: 0 5px;
		}
	}

	@media screen and (max-width: 800px) {
		margin-bottom: 0;
		margin-top: 15px;
	}
`;

export default StyledSelectWeek;
