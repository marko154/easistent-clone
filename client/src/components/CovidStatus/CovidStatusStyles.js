import styled from "styled-components";

export const NewsWrapper = styled.div`
	width: 930px;

	@media screen and (min-width: 800px) and (max-width: 1350px) {
		max-width: 700px;
		width: 70vw;
	}

	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`;

const StyledCovidStatus = styled.section`
	font-family: "Open Sans", sans-serif;
	margin: 30px 0 50px;

	& > div:not(.active-school-cases):not(.legend) {
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		& > div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			font-size: 1.35rem;
			height: 100px;
			width: 175px;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			border: 1px solid rgba(0, 0, 0, 0.171);
			div {
				font-size: 0.8rem;
			}
			&:hover {
				box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 22px;
				border: 1px solid rgba(0, 0, 0, 0.2);
				background: rgba(0, 0, 0, 0.06);
			}
		}
	}
	h3 {
		margin-top: 30px;
	}

	.active-school-cases {
		display: flex;
		margin: 30px 0;
		margin-top: 20px;
		height: 40px;
		width: 100%;
		box-sizing: border-box;
		cursor: pointer;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		& > div:first-child {
			background: #5cdb95;
			width: ${({
				kindergarten,
				elementary,
				elementary_special,
				highschool,
			}) =>
				(100 * kindergarten) /
				(highschool + kindergarten + elementary + elementary_special)}%;
		}
		div:nth-child(2) {
			background: #ff4d47;
			width: ${({
				kindergarten,
				elementary,
				elementary_special,
				highschool,
			}) =>
				(100 * elementary) /
				(highschool + kindergarten + elementary + elementary_special)}%;
		}
		div:nth-child(3) {
			background: #3e5fad;
			width: ${({
				kindergarten,
				elementary,
				elementary_special,
				highschool,
			}) =>
				(100 * elementary_special) /
				(highschool + kindergarten + elementary + elementary_special)}%;
		}
		div:nth-child(4) {
			background: orange;
			width: ${({
				kindergarten,
				elementary,
				elementary_special,
				highschool,
			}) =>
				(100 * highschool) /
				(highschool + kindergarten + elementary + elementary_special)}%;
		}

		div {
			position: relative;
			div {
				background: white;
				position: absolute;
				top: -30px;
				width: max-content;
				z-index: 1;
				padding: 1px 3px;
				border: 1px solid rgba(0, 0, 0, 0.171);
			}
		}
	}

	.legend {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		div {
			display: flex;
			div {
				height: 20px;
				width: 20px;
				margin-right: 16px;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			}
		}
		@media screen and (max-width: 800px) {
			display: block;
		}
	}
`;

export default StyledCovidStatus;
