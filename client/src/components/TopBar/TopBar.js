import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowDropdown } from "../../redux/features/showDropdown/showDropdownSlice";
import { AiFillMail } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import StyledNav from "./TopBarStyles";

const TopBar = ({
	toggleShowDropdown,
	avatarUrl,
	name,
	setIsMenuOpen,
	isOpen,
	primaryColor,
}) => (
	<StyledNav primary={primaryColor}>
		<div className="menu-and-name">
			<HiMenu onClick={() => setIsMenuOpen(!isOpen)} />
			<Link to="/">
				<h3>Feasistent</h3>
			</Link>
		</div>
		<div className="right-side">
			<p className="student-name">{name}</p>
			<div className="messages">
				<a
					href="https://mail.google.com/mail/u/0/#search/easistent"
					target="_blank"
					// without
					rel="noreferrer"
				>
					<AiFillMail size="18px" />
				</a>
				<div className="num-of-messages">23</div>
			</div>
			<div className="avatar-clickable" onClick={toggleShowDropdown}>
				<div className="avatar">
					<img
						alt="avatar"
						style={!avatarUrl ? { display: "none" } : null}
						src={`https://www.easistent.com/images/dijaki/${avatarUrl}`}
					/>
				</div>
			</div>
		</div>
	</StyledNav>
);

const mapStateToProps = (state) => ({
	showDropdown: state.showDropdown,
	avatarUrl: state.user.avatar,
	name: state.user.display_name,
	primaryColor: state.user.primary,
});

const mapDispatchToProps = (dispatch) => ({
	toggleShowDropdown: () => dispatch(toggleShowDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
