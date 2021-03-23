import styled from "styled-components";

const StyledAbsence = styled.div`
	font-family: "Open Sans", sans-serif;
	width: 600px;
	color: rgba(0, 0, 0, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.25);
	margin: 3px 0;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	cursor: pointer;
	transition: 0.25s ease;

	.summary {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		p {
			padding: 10px 0px;
			@media screen and (max-width: 800px) {
				flex-grow: 1;
				padding: 0 20px;
			}
		}
		svg {
			padding: 30px 20px;
			font-size: 1.3em;
			@media screen and (max-width: 600px) {
				flex-grow: 1;
				padding: 20px 10px 10px;
			}
		}
	}

	p {
		overflow: hidden;
		padding: 0 30px;
		margin: 0;
	}

	.hour {
		display: flex;
		padding: 10px 30px;
		overflow: hidden;
		color: ${(props) => props.primaryColor};

		&:hover {
			background: rgba(0, 0, 0, 0.08);
		}
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 22px;
		border: 1px solid rgba(0, 0, 0, 0.27);
		background: rgba(0, 0, 0, 0.06);
	}
	@media screen and (max-width: 800px) {
		width: 90vw;
	}

	.details {
		overflow: hidden;
		padding: 10px;
		transition: ease 0.25s;
	}

	.details-enter {
		.hour,
		p {
			max-height: 0px;
		}
		max-height: 0px;
		transition: 0.25s ease;
	}
	.details-enter-active {
		max-height: 500px;
		transition: ease 0.25s;
		.hour,
		p {
			max-height: 500px;
		}
	}
	.details-exit {
		max-height: 500px;
		transition: ease 0.25s;
		.hour,
		p {
			max-height: 500px;
		}
	}
	.details-exit-active {
		max-height: 0px;
		transition: ease 0.25s;

		.hour,
		p {
			max-height: 0px;
			padding: 0 30px;
		}
	}
`;

export default StyledAbsence;
