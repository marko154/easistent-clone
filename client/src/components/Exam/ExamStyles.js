import styled from "styled-components";

const StyledExam = styled.div`
	font-family: "Open Sans", sans-serif;
	width: 60vw;
	color: rgba(0, 0, 0, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.25);
	margin: 3px 0;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 15px;

	.date {
		font-size: 0.875rem;
		padding: 10px 0;
		@media screen and (max-width: 800px) {
			padding-top: 7px;
			padding-bottom: 0px;
		}
	}

	.course-grade {
		font-size: 1.3rem;
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		@media screen and (max-width: 800px) {
			font-size: 1.15rem;
		}
	}

	.info {
		padding-left: 5px;
		color: darken($primary, 10%);
		@media screen and (max-width: 800px) {
			font-size: 0.92rem;
		}
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 22px;
		border: 1px solid rgba(0, 0, 0, 0.27);
		background: rgba(0, 0, 0, 0.06);
	}

	&:last-child {
		margin-bottom: 100px;
	}

	@media screen and (max-width: 800px) {
		width: 80vw;
	}
`;

export default StyledExam;
