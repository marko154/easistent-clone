import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { toggleShowDropdown } from "../../redux/features/showDropdown/showDropdownSlice";
import {
	setClientID,
	setPrimaryColor,
	setSecondaryColor,
	logUserOut,
} from "../../redux/features/setUser/setUserSlice";
import { BiLogOut, BiColorFill } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineArrowLeft, AiFillLayout } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
import StyledUserDropdown from "./UserDropdownStyles";
import ColorPicker from "../ColorPicker/ColorPicker";
import { toggleIsDraggable } from "../../redux/features/sideMenu/sideMenuSlice";

const UserDropdown = forwardRef(
	(
		{
			toggleShowDropdown,
			setPrimaryColor,
			setSecondaryColor,
			toggleIsSidemenuDragging,
			logUserOut,
		},
		ref
	) => {
		const [activeMenu, setActiveMenu] = useState("main");
		const [menuHeight, setMenuHeight] = useState(144);
		const [isChoosingColor, setIsChoosingColor] = useState(false);
		const [type, setType] = useState(null);

		return (
			<>
				<StyledUserDropdown ref={ref} height={menuHeight}>
					<CSSTransition
						in={activeMenu === "main"}
						unmountOnExit
						timeout={300}
						classNames="menu-primary"
						onEnter={(e) => setMenuHeight(e.offsetHeight)}
					>
						<div>
							<div onClick={logUserOut}>
								<BiLogOut /> Log Out
							</div>
							<Link
								to="user-data"
								onClick={() => toggleShowDropdown(false)}
							>
								<div>
									<FaUserAlt /> User Data
								</div>
							</Link>
							<div onClick={() => setActiveMenu("settings")}>
								<RiSettings3Fill /> Settings
							</div>
						</div>
					</CSSTransition>

					<CSSTransition
						in={activeMenu === "settings"}
						unmountOnExit
						timeout={300}
						classNames="menu-settings"
						onEnter={(e) => setMenuHeight(e.offsetHeight)}
					>
						<div>
							<div
								onClick={() => {
									setActiveMenu("main");
									setIsChoosingColor(false);
								}}
							>
								<AiOutlineArrowLeft />
								Back
							</div>
							<div
								onClick={() => {
									setIsChoosingColor(true);
									setType("primary");
								}}
							>
								<IoMdColorFill />
								Primary Color
							</div>
							<div
								onClick={() => {
									setIsChoosingColor(true);
									setType("secondary");
								}}
							>
								<BiColorFill /> Secondary Color
							</div>
							<div
								onClick={() => {
									setIsChoosingColor(false);
									toggleIsSidemenuDragging();
								}}
							>
								<AiFillLayout /> Menu Layout
							</div>
						</div>
					</CSSTransition>
				</StyledUserDropdown>
				{isChoosingColor && (
					<ColorPicker
						type={type}
						setColor={
							type === "primary"
								? setPrimaryColor
								: setSecondaryColor
						}
					/>
				)}
			</>
		);
	}
);

const mapDispatchToProps = (dispatch) => ({
	setClientID: (clientID) => dispatch(setClientID(clientID)),
	toggleShowDropdown: (val) => dispatch(toggleShowDropdown(val)),
	setPrimaryColor: (color) => dispatch(setPrimaryColor(color)),
	setSecondaryColor: (color) => dispatch(setSecondaryColor(color)),
	toggleIsSidemenuDragging: (val) => dispatch(toggleIsDraggable(val)),
	logUserOut: () => dispatch(logUserOut()),
});

export default connect(() => ({}), mapDispatchToProps, null, {
	forwardRef: true,
})(UserDropdown);
