import styled from "styled-components";

const StyledTimetable = styled.div`
	.timetable-wrapper {
		border-top: 1px solid rgb(199, 199, 199);
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		margin-bottom: 100px;
		animation: 0.15s fade-pop ease;
		opacity: ${(props) => (props.isLoading ? ".75" : "1")};
		transition: 0.05s ease;
	}
	.day-names {
		margin-bottom: 20px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}

	.row {
		display: flex;
		border-bottom: 1px solid rgb(199, 199, 199);

		.from-to {
			width: 9vw;
			padding-top: 10px;
			padding-left: 15px;
			font-family: "Open Sans", sans-serif;
			font-size: 0.82rem;
			color: rgba(0, 0, 0, 0.8);
			border-left: 1px solid rgb(199, 199, 199);
			border-right: 1px solid rgb(199, 199, 199);

			.number {
				font-size: 1.1rem;
			}

			.time {
				margin-left: 0.4vw;
			}

			@media screen and (max-width: 1200px) {
				width: 5vw;
				.time {
					display: none;
				}
			}
			@media screen and (max-width: 600px) {
				width: 4vw;
				padding: 10px 5px;
				.number {
					font-size: 0.9rem;
					padding-right: 2px;
				}
			}
		}

		.time-indicator {
			height: 2px;
			width: 103%;
			margin-left: -1.5%;
			background: #992020;
			position: absolute;
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			z-index: 1;

			.ball {
				height: 7px;
				width: 7px;
				margin-top: -2px;
				border-radius: 50%;
				background: #bb2020;
				transition: 0.2s ease;
			}
			&:hover {
				background: red;
				.ball {
					background: red;
				}
			}
		}

		.hour,
		.split-hour {
			transition: background 0.2s ease;
			min-height: 50px;
			max-width: 280px;
			font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
				"Open Sans", "Helvetica Neue", sans-serif;
			color: white;
			border-right: 1px solid rgb(199, 199, 199);
			box-sizing: border-box;
			position: relative;
			overflow: hidden;

			.special-type {
				position: absolute;
				top: 0;
				right: 0;
				border-top: 15px solid transparent;
				border-left: 20px solid transparent;
			}

			.subject-classroom {
				cursor: pointer;
				width: 100%;
				display: flex;
				justify-content: space-between;

				.subject {
					padding-top: 5px;
					padding-left: 6px;
					font-weight: bold;
					@media screen and (max-width: 800px) {
						font-size: 0.9rem;
						padding-left: 3px;
					}
				}

				.classroom {
					font-size: 0.9rem;
					padding-top: 3px;
					padding-right: 6px;
					@media screen and (max-width: 800px) {
						font-size: 0.75rem;
					}
				}
			}
			.teacher {
				padding: 5px 0;
				padding-left: 6px;
				font-size: 0.82rem;
				cursor: pointer;
				height: 100%;

				@media screen and (max-width: 800px) {
					font-size: 0.75rem;
					padding-left: 4px;
				}
			}
		}

		.hour {
			width: ${(props) => 65 / props.numOfDays}vw;
			@media screen and (max-width: 1000px) and (min-width: 800px) {
				width: ${(props) => 68 / (props.numOfDays + 1)}vw;
			}

			@media screen and (max-width: 800px) {
				width: ${(props) => 100 / (props.numOfDays + 1)}vw;
			}
		}

		.all-day-event,
		.event {
			font-weight: 500;
			padding: 5px;
			background: #eee;
			color: #444;
			border: 2px dotted #999;
			cursor: pointer;
			div:last-child {
				font-size: 0.8rem;
				@media screen and (max-width: 800px) {
					font-size: 0.7rem;
				}
			}
			@media screen and (max-width: 800px) {
				font-size: 0.9rem;
			}
		}

		.split-hour {
			width: ${(props) => 32.5 / props.numOfDays}vw;
			@media screen and (max-width: 800px) {
				width: ${(props) => 50 / (props.numOfDays + 1)}vw;
			}

			@media screen and (max-width: 1000px) and (min-width: 800px) {
				width: ${(props) => 34 / (props.numOfDays + 1)}vw;
			}
			.subject-classroom {
				width: ${(props) => 32.5 / props.numOfDays}vw;
				@media screen and (max-width: 800px) {
					flex-direction: column;
					.classroom {
						padding: 3px;
					}
				}
			}
		}

		.day-name {
			width: ${(props) => 65 / props.numOfDays}vw;
			max-width: 280px;
			padding: 15px 20px;
			font-family: "Open Sans", sans-serif;
			box-sizing: border-box;
			color: rgba(0, 0, 0, 0.8);
			box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
			border-right: 1px solid rgb(199, 199, 199);
			border-top: 1px solid rgb(199, 199, 199);
			overflow: hidden;

			&:first-child {
				border-left: 1px solid rgb(199, 199, 199);
				width: calc(9vw + 17px);
				@media screen and (max-width: 1200px) {
					width: calc(5vw + 17px);
				}
				@media screen and (max-width: 600px) {
					width: calc(4vw + 12px);
				}
			}
			div {
				font-size: 0.8rem;
			}
			@media screen and (max-width: 600px) {
				padding: 8px 10px;
			}

			@media screen and (max-width: 800px) {
				.name {
					visibility: hidden;
					display: block;
					&::first-letter {
						visibility: visible;
					}
				}
				width: ${(props) => 100 / (props.numOfDays + 1)}vw;
			}
			@media screen and (max-width: 1000px) and (min-width: 800px) {
				width: ${(props) => 68 / (props.numOfDays + 1)}vw;
			}
		}
	}

	@media screen and (max-width: 800px) {
		margin-top: 20px;
	}

	@keyframes fade-pop {
		0% {
			transform: scale(0.9);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
`;

export default StyledTimetable;
