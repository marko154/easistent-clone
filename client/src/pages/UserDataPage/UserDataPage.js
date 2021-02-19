import { connect } from "react-redux";
import UserData from "../../components/UserData/UserData";
import Spinner from "../../components/Spinner/Spinner";
import StyledPage from "../PageStyles";

const UserDataPage = ({ userData }) => {
	return (
		<StyledPage>
			{userData.avatar ? <UserData {...userData} /> : <Spinner />}
		</StyledPage>
	);
};

const mapStateToProps = (state) => ({
	userData: state.user,
});

export default connect(mapStateToProps)(UserDataPage);
