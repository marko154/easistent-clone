import styled from "styled-components";

const StyledUserData = styled.div`
	width: 60vw;
	display: grid;
	font-family: "Noto Sans", sans-serif;
	${(props) => (props.isAuthenticated ? "" : "filter: blur(10px);")}
	z-index: -1;
	.image-name-age {
		margin-top: 30px;
		display: flex;

		img {
			width: 350px;
			cursor: pointer;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			margin: 15px 0 25px 20px;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.28) 0px 5px 22px;
			}
		}

		div {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin: 0 50px;

			div {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 10px 15px;
				margin: 15px 0;
				border-bottom: 1px solid rgba(0, 0, 0, 0.4);
				width: 100%;

				&:hover {
					border-bottom: 1px solid rgba(0, 0, 0, 0.8);
				}

				@media screen and (max-width: 600px) {
					margin: 8px 0px;
					width: 70vw;
				}
			}
			@media screen and (max-width: 600px) {
				margin: 0 15px;
			}
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;
			margin-top: 10px;

			img {
				width: 80vw;
			}
		}
	}

	.other {
		display: flex;
		flex-wrap: wrap;
		div {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 10px 15px;
			margin: 15px 15px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.4);
			width: calc(50% - 60px);
			&:hover {
				border-bottom: 1px solid rgba(0, 0, 0, 0.8);
			}
		}
		@media screen and (max-width: 800px) {
			div {
				width: 70vw;
			}
		}
	}
	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;

export default StyledUserData;

export const StyledForm = styled.form`
	position: absolute;
	top: 20vh;
	display: flex;
	flex-direction: column;
	background: white;
	font-family: "Open Sans", sans-serif;
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	border: 1px solid ${(props) => props.primary}aa;
	transition: 0.2s ease;

	label {
		text-align: center;
		padding: 5px;
	}
	div {
		display: flex;
		input {
			padding: 8px 16px;
			margin: 0;
			font-size: 1.5rem;
			max-width: 400px;
			width: 80vw;
			border: none;
			border-top: 1px solid ${(props) => props.primary}aa;
			background: none;
			&:focus {
				outline: 1px solid rgba(10, 10, 80, 0.2);
			}
		}

		button {
			cursor: pointer;
			font-family: "Open Sans", sans-serif;
			outline: none;
			background: none;
			font-size: 1.25rem;
			color: ${(props) => props.primary};
			padding: 0 12px;
			border: none;
			border-top: 1px solid ${(props) => props.primary}aa;
			border-left: 1px solid ${(props) => props.primary}aa;

			&:hover {
			}
		}
	}

	&:focus {
		border: 1px solid ${(props) => props.primary};
	}
`;
