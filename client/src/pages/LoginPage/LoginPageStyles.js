import styled from "styled-components";
import { connect } from "react-redux";

const StyledLoginForm = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 45vh;
	transform: translateY(-50%);
	background: white;
	width: 500px;
	height: 550px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-display: swap;
	font-family: "Open Sans", sans-serif;
	font-size: 2em;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	transition: 0.15s ease-out;

	h3 {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 0;
		margin-bottom: 0;
		color: white;
		background: ${(props) => props.primary};
		width: 100%;
		height: 25%;
	}
	.inputs {
		height: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: 0.15s ease-out;
	}

	.password,
	.username {
		width: 280px;

		padding: 10px 10px;
		font-family: "Open Sans", sans-serif;
		margin: 12px 0;
		border: 1px solid ${(props) => props.primary}80;
		box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

		&:hover,
		&:focus {
			border: 1px solid ${(props) => props.primary}aa;
			outline: none;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 15px;
		}

		@media screen and (max-width: 500px) {
			width: 70vw;
		}
	}
	.password-input {
		display: flex;
		align-items: center;
	}
	.password {
		width: 242px;
		@media screen and (max-width: 500px) {
			width: calc(70vw - 38px);
		}
	}
	.is-visible {
		border: 1px solid ${(props) => props.primary}80;
		border-left: none;
		height: 38px;
		width: 38px;
		font-size: 25px;
		color: ${(props) => props.primary};
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background: #1248de09;
		transition: 0.05s ease;

		&:hover,
		&:focus {
			border: 1px solid ${(props) => props.primary}aa;
			border-left: none;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 15px;
		}
	}

	.error {
		color: #555;
		font-size: 0.85rem;
		animation: 0.1s error ease forwards;
		opacity: 0;
		margin-bottom: -0.85rem;
	}

	p {
		font-size: 0.75rem;
		margin: 0;
		margin-bottom: -16px;
		margin-top: 4px;
		text-decoration: underline;
		cursor: pointer;
	}

	@media screen and (max-width: 500px) {
		width: 90vw;
		height: 60vh;
	}

	@keyframes error {
		0% {
			opacity: 0;
			transform: scale(0%);
		}
		100% {
			opacity: 1;
			transform: scale(100%);
		}
	}
`;

const mapStateToProps = (state) => ({ primary: state.user.primary });

export default connect(mapStateToProps)(StyledLoginForm);
