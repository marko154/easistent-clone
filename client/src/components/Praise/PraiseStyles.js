import styled from "styled-components";

const StyledPraise = styled.div`
	font-family: "Open Sans", sans-serif;
	width: 70vw;
	color: rgba(0, 0, 0, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	margin: 3px 0;
	transition: 0.25 ease;
	.summary {
		cursor: pointer;
		padding: 20px 20px;
		position: relative;
		.date {
			font-size: 0.83rem;
		}
		.author {
			padding: 8px 15px;
			font-size: 1.075rem;
		}

		.category {
			padding: 0 15px;
			font-size: 0.95rem;
			@media screen and (max-width: 800px) {
				font-size: 0.9rem;
			}
		}
		.arrow {
			position: absolute;
			right: 25px;
			top: 50%;
			transform: translateY(-50%);
			font-size: 20px;
		}
		@media screen and (max-width: 800px) {
			padding: 15px;
		}
	}
	.description {
		color: ${(props) => props.primary};
		overflow: hidden;
		padding: 15px 30px;
		transition: 0.25s ease;
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

	.description-animation-enter {
		max-height: 0px;
	}
	.description-animation-enter-active {
		max-height: 100px;
	}
	.description-animation-exit {
		max-height: 100px;
	}
	.description-animation-exit-active {
		max-height: 0px;
		padding: 0px 30px;
	}
`;

export default StyledPraise;
