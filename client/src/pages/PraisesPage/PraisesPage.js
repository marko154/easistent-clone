import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPraises } from "../../redux/features/praises/setPraisesSlice";
import Praise from "../../components/Praise/Praise";
import Spinner from "../../components/Spinner/Spinner";
import StyledPage from "../PageStyles";

const PraisesPage = ({ setPraises, praises }) => {
	useEffect(() => {
		if (praises === null) setPraises();
	}, [praises, setPraises]);

	return (
		<StyledPage>
			{praises === null ? (
				<Spinner />
			) : praises.length > 0 ? (
				praises.map((praise, i) => <Praise {...praise} key={i} />)
			) : (
				<div className="no-content">No Praises or Improvements</div>
			)}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	praises: state.praises,
});

const mapDispatchToProps = (dispatch) => ({
	setPraises: () => dispatch(fetchPraises()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PraisesPage);
