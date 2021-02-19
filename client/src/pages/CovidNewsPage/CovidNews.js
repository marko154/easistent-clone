import { useRef, useEffect, memo } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../redux/features/news/setNewsSlice";
import CovidStatus from "../../components/CovidStatus/CovidStatus";
import SchoolCovidStatus from "../../components/SchoolCovidStatus/SchoolCovidStatus";
import NewsArticle from "../../components/NewsArticle/NewsArticle";
import Spinner from "../../components/Spinner/Spinner";
import StyledPage from "../PageStyles";
import { NewsWrapper } from "../../components/CovidStatus/CovidStatusStyles";

const CovidNews = ({ news, setNews }) => {
	const shouldAnimateRef = useRef(false);
	useEffect(() => {
		if (news.length === 0) {
			setNews();
			shouldAnimateRef.current = true;
		} else shouldAnimateRef.current = false;
	}, [news, setNews]);

	return (
		<StyledPage>
			{news.length === 0 ? (
				<Spinner />
			) : (
				<NewsWrapper>
					<CovidStatus />
					<SchoolCovidStatus />
					{news.map((article, i) => (
						<NewsArticle
							shouldAnimate={shouldAnimateRef.current}
							key={i}
							i={i}
							{...article}
						/>
					))}
				</NewsWrapper>
			)}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	news: state.news.news,
});

const mapDispatchToProps = (dispatch) => ({
	setNews: () => dispatch(fetchNews()),
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(CovidNews));
