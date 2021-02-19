import styled from "styled-components";

const StyledPageNotFound = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	margin-top: 10vh;
	flex-direction: column;

	h1 {
		font-size: 6rem;
		padding: 0px;
		margin: 0;
	}
	img {
		z-index: -1;
		animation: error 1.3s ease;
		@media screen and (max-width: 600px) {
			width: 130vw;
		}
	}

	@keyframes error {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export default StyledPageNotFound;
