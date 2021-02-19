import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGrades } from "../../redux/features/grades/setGradesSlice";
import Spinner from "../../components/Spinner/Spinner";
import StyledGrade from "./GradesPageStyles";
import StyledPage from "../PageStyles";

const GradesPage = ({ fetchGrades, grades }) => {
	useEffect(() => {
		if (grades === null) fetchGrades();
	}, [fetchGrades, grades]);
	return (
		<>
			{grades === null ? (
				<Spinner />
			) : (
				<StyledPage>
					{grades.map((grade, i) => (
						<StyledGrade key={i}>
							<div className="top">
								<div className="course-name">{grade.name}</div>
								<div>
									{grade.semesters[0].grades[0].type_name}
								</div>
								<div className="grade-value">
									{grade.semesters[0].grades[0].value}
								</div>
							</div>

							<div className="avg-grade">
								Avg. {grade.average_grade}
							</div>
							{grade.final_grade}
						</StyledGrade>
					))}
				</StyledPage>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	grades: state.grades,
});

const mapDispatchToProps = (dispatch) => ({
	fetchGrades: () => dispatch(fetchGrades()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GradesPage);
