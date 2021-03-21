import { useEffect, useState, memo } from "react";
import { connect } from "react-redux";
import { fetchExams } from "../../redux/features/exams/setExamsSlice";
import { exportEventsToCalendar } from "../../googleApi/calendar";
import Exam from "../../components/Exam/Exam";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import StyledChoice from "./ExamsPageStyles";
import StyledPage from "../PageStyles";

const pages = { future: "future", past: "past" };

const ExamsPage = ({ fetchExams, exams, primary, school }) => {
	const [page, setPage] = useState(pages.future);
	const [isLoadingToCalendar, setIsLoading] = useState(false);

	useEffect(() => {
		if (!exams.past || !exams.future) fetchExams();
	}, [fetchExams, exams]);

	const exportToGoogleCalendar = () => {
		exportEventsToCalendar(exams, school, setIsLoading);
	};

	return (
		<StyledPage>
			<StyledChoice primary={primary}>
				<div
					className={page === pages.past ? "active" : ""}
					onClick={() => setPage(pages.past)}
				>
					Past
				</div>
				<div
					className={page === pages.future ? "active" : ""}
					onClick={() => setPage(pages.future)}
				>
					Future
				</div>
			</StyledChoice>
			{page === pages.future && (
				<div style={{ marginBottom: "20px" }}>
					<Button
						width={200}
						onClick={exportToGoogleCalendar}
						isLoading={isLoadingToCalendar}
					>
						Export to Google Calendar
					</Button>
				</div>
			)}
			{exams.future ? (
				page === pages.future ? (
					<div>
						{exams.future &&
							exams.future.map((exam, i) => (
								<Exam key={i} {...exam} />
							))}
					</div>
				) : (
					<div>
						{exams.past &&
							exams.past.map((exam, i) => (
								<Exam key={i} {...exam} />
							))}
					</div>
				)
			) : (
				<Spinner />
			)}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	exams: state.exams,
	primary: state.user.primary,
	school: state.user.school,
});

const mapDispatchToProps = (dispatch) => ({
	fetchExams: () => dispatch(fetchExams()),
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(ExamsPage));
