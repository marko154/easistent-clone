import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAbsences } from "../../redux/features/absences/setAbsencesSlice";
import Absence from "../../components/Absence/Absence";
import Spinner from "../../components/Spinner/Spinner";
import StyledPage from "../PageStyles";
import StyledSection from "./AbsencesPageStyles";

const AbsencesPage = ({ setAbsences, absences }) => {
	useEffect(() => {
		if (!absences.items.length) setAbsences();
	}, [absences, setAbsences]);

	return (
		<StyledPage>
			{absences.items.length === 0 ? (
				<Spinner />
			) : (
				<>
					<StyledSection>
						<span>Excused: {absences.summary.excused_hours}</span>
						<span>
							Unexcused: {absences.summary.unexcused_hours}
						</span>
						<span>
							Unmanaged: {absences.summary.unmanaged_absences}
						</span>
					</StyledSection>

					{absences.items.map((absence, i) => (
						<Absence key={i} {...absence} />
					))}
				</>
			)}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	absences: state.absences,
});

const mapDispatchToProps = (dispatch) => ({
	setAbsences: () => dispatch(fetchAbsences()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AbsencesPage);
