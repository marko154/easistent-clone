import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHomework } from "../../redux/features/homework/homeworkSlice";
import Spinner from "../../components/Spinner/Spinner";
import StyledPage from "../PageStyles";

const HomeworkPage = ({ homework, dispatch }) => {
	useEffect(() => {
		if (!homework) dispatch(fetchHomework());
	}, [homework, dispatch]);
	return (
		<StyledPage>
			{homework ? (
				homework.items.length > 0 ? (
					<div>sdhuf</div>
				) : (
					<div className="no-content">No Homework</div>
				)
			) : (
				<Spinner />
			)}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	homework: state.homework,
});

export default connect(mapStateToProps, null)(HomeworkPage);
