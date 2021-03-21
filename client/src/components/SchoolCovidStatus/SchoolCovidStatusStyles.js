import styled from "styled-components";

const StyledSection = styled.section`
	padding: 25px 40px;
	color: rgba(0, 0, 0, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	font-family: "Open Sans", sans-serif;
	font-size: 0.9rem;

	.rule {
		color: black;
		font-size: 1rem;
		padding-bottom: 30px;
		padding-top: 10px;
	}

	.validity {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.regions {
		margin-bottom: 20px;
	}

	.exceptions {
		li {
			padding: 2px 0;
			&:hover {
				color: black;
			}
			@media screen and (max-width: 800px) {
				padding: 1px 0;
				margin-left: -8px;
			}
		}
	}

	.additional-rules {
		div {
			margin-bottom: 7px;
			&:first-child {
				margin-top: 10px;
			}
		}
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 22px;
		border: 1px solid rgba(0, 0, 0, 0.27);
	}
	@media screen and (max-width: 800px) {
		padding: 15px 19px;
		h2 {
			font-size: 1.4em;
			margin: 12px 0 10px;
		}
		.rule {
			font-size: 1em;
		}
	}
`;

export default StyledSection;
