import styled from "styled-components";

const StyledNewsArticle = styled.div`
	margin: 20px 0;
	cursor: pointer;
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border: 1px solid rgba(0, 0, 0, 0.171);
	transition: 0.1s ease;
	color: rgba(0, 0, 0, 0.842);
	width: 70vw;
	max-width: 930px;
	opacity: ${(props) => (props.shouldAnimate ? "0" : "1")};
	animation: ${(props) =>
		props.shouldAnimate ? "0.5s fadein forwards" : ""};
	animation-delay: ${(props) => props.i / 8}s;
	overflow: auto;
	position: relative;

	.new-article-img {
		width: 350px;
		height: auto;

		@media screen and (max-width: 800px) {
			width: 200px;
		}
	}
	.new-article-data {
		position: absolute;
		width: 540px;

		margin-left: 350px;
		padding: 0 20px;
		overflow-y: auto;
		height: ${(props) => props.imgHeight}px;
		font-family: "Open Sans", sans-serif;

		h3 {
			font-family: "Noto Sans", sans-serif;
		}
		@media screen and (max-width: 800px) {
			position: static;
			margin-left: 0;
			height: min-content;
			font-size: 0.9em;
		}
		&::-webkit-scrollbar {
			width: 3px;
		}

		&::-webkit-scrollbar-track {
			background-color: rgba(0, 0, 0, 0.08);
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(0, 0, 0, 0.14);
		}
	}

	@keyframes fadein {
		0% {
			opacity: 0;
			transform: scale(0.925);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 22px;
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		width: 90vw;
		.new-article-img {
			width: 90vw;
		}

		.new-article-data {
			width: calc(85vw - 40px);
		}
	}
`;

export default StyledNewsArticle;
