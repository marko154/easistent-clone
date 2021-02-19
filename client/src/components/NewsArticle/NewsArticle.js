import { useState } from "react";
import StyledNewsArticle from "./NewsArticleStyles";

const NewsArticle = ({ title, imgUrl, summary, url, i, shouldAnimate }) => {
	const [height, setHeight] = useState(0);
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<StyledNewsArticle
				shouldAnimate={shouldAnimate}
				i={i}
				imgHeight={height}
			>
				<img
					alt=""
					src={imgUrl}
					onLoad={(e) => setHeight(e.target.height)}
					className="new-article-img"
				/>
				<div className="new-article-data">
					<h3>{title}</h3>
					<p>{summary}</p>
				</div>
			</StyledNewsArticle>
		</a>
	);
};

export default NewsArticle;
