import StyledExam from "./ExamStyles";
import { formatDate } from "../../utils/dateFormat";

const Exam = ({ course, date, grade, period, subject }) => (
	<StyledExam>
		<div className="date">{formatDate(date)}</div>
		<div className="course-grade">
			<span>{course}</span>
			<span>{grade}</span>
		</div>
		<div className="info">
			<span> {subject + ","} </span>
			<span> {period} </span>
		</div>
	</StyledExam>
);

export default Exam;
