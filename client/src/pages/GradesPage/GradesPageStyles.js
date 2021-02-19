import styled from "styled-components";

const StyledGrade = styled.div`
	font-family: "Open Sans", sans-serif;
	width: 70vw;
	height: min-content;
	color: rgba(0, 0, 0, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.25);
	margin: 3px 0;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	.top {
		display: flex;
		justify-content: space-between;
		div {
			padding: 20px;
			@media screen and (max-width: 800px) {
				padding: 15px 20px;
			}
		}
		.course-name {
			font-size: 1.2rem;
			@media screen and (max-width: 800px) {
				font-size: 1.1rem;
			}
		}
		.grade-value {
			font-size: 1.5rem;
			padding-right: 30px;
		}
	}
	.avg-grade {
		padding-bottom: 20px;
		padding-left: 20px;
		font-size: 0.93rem;
		@media screen and (max-width: 800px) {
			padding-bottom: 15px;
		}
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 22px;
		border: 1px solid rgba(0, 0, 0, 0.27);
		background: rgba(0, 0, 0, 0.06);
	}

	&:first-child {
		margin-top: 30px;
	}

	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;

export default StyledGrade;
