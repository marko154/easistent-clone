import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ImTable, ImBook } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import { MdThumbsUpDown } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import DragHandle from "./DragHandle";
import { RiFilePaper2Fill, RiVirusFill } from "react-icons/ri";
import StyledSideMenu from "./SideMenuStyles";
import {
	setMenuItems,
	toggleIsDraggable,
} from "../../redux/features/sideMenu/sideMenuSlice";

const mapToIcon = {
	Timetable: ImTable,
	Grades: GiBookmarklet,
	Exams: RiFilePaper2Fill,
	Absences: ImBook,
	Homework: FaPencilAlt,
	Praises: MdThumbsUpDown,
	"Covid News": RiVirusFill,
};

const SideMenu = ({
	isOpen,
	setIsMenuOpen,
	primaryColor,
	secondaryColor,
	menuItems,
	isDraggable,
	setMenuItems,
	toggleIsDraggable,
}) => {
	const [dragID, setDragID] = useState(null);
	const [prevDrag, setPrevDrag] = useState(null);
	const isMenuOpen = window.innerWidth >= 800 || isOpen;
	useEffect(() => {
		window.onresize = (e) => {
			if (window.innerWidth >= 800) setIsMenuOpen(true);
			else setIsMenuOpen(false);
		};
	}, [setIsMenuOpen]);

	const handleNavClick = () => {
		if (window.innerWidth < 800) setIsMenuOpen(false);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
		if (prevDrag) prevDrag.style.marginTop = "0px";

		if (event.currentTarget.id !== dragID)
			event.currentTarget.style.marginTop = "66px";

		if (prevDrag) {
			const prevDragItem = menuItems.find(
				(item) => prevDrag.id === item.name
			);
			if (
				event.clientY > prevDrag.getBoundingClientRect().top + 33 &&
				prevDragItem.order === menuItems.length - 1
			) {
				prevDrag.style.marginTop = "0";
				prevDrag.style.marginBottom = "66px";
			}
		}
		setPrevDrag(event.currentTarget);
	};
	const handleDrag = (event) => {
		setDragID(event.currentTarget.id);
		event.currentTarget.style.height = "0";
		event.currentTarget.style.padding = "0";
		event.currentTarget.style.opacity = "0";
	};

	const handleDrop = (event) => {
		const dragItem = menuItems.find((item) => item.name === dragID);
		const dropItem = menuItems.find((item) => item.name === prevDrag.id);

		const dragItemOrder = dragItem.order;
		let dropItemOrder = dropItem.order;
		let newMenuItems;
		if (dropItemOrder < dragItemOrder) {
			newMenuItems = menuItems.map((item) => {
				const newItem = { ...item };
				if (item.name === dragID) newItem.order = dropItemOrder;
				if (item.order >= dropItemOrder && item.order < dragItemOrder)
					newItem.order += 1;
				return newItem;
			});
		} else {
			if (event.clientY > prevDrag.getBoundingClientRect().top + 33)
				dropItemOrder += 1;
			newMenuItems = menuItems.map((item) => {
				const newItem = { ...item };
				if (item.name === dragID) newItem.order = dropItemOrder - 1;
				if (item.order > dragItemOrder && item.order < dropItemOrder)
					newItem.order -= 1;
				return newItem;
			});
		}
		event.currentTarget.style.height = "66px";
		event.currentTarget.style.padding = "22px 25px 22px 40px";
		event.currentTarget.style.opacity = "1";
		prevDrag.style.marginTop = "0";
		prevDrag.style.marginBottom = "0";
		setMenuItems(newMenuItems);
	};

	return (
		<StyledSideMenu
			width={isMenuOpen ? "250px" : "0px"}
			bg={secondaryColor}
			primary={primaryColor}
			isDroppable={isDraggable}
		>
			{menuItems.map((item) => {
				const Icon = mapToIcon[item.name];
				return (
					<NavLink
						key={item.name}
						id={item.name}
						exact
						to={item.url}
						activeClassName="active"
						onClick={handleNavClick}
						draggable={isDraggable}
						onDragOver={handleDragOver}
						onDragStart={handleDrag}
						onDragEnd={handleDrop}
					>
						<div>
							<Icon /> {item.name}
						</div>
						{isDraggable && <DragHandle />}
					</NavLink>
				);
			})}
			{isDraggable && (
				<button
					className="save-layout"
					onClick={() => toggleIsDraggable(false)}
				>
					Save Layout
				</button>
			)}
		</StyledSideMenu>
	);
};

const mapStateToProps = (state) => ({
	primaryColor: state.user.primary,
	secondaryColor: state.user.secondary,
	isDraggable: state.sidemenu.isDraggable,
	// create a selector for this bitch
	menuItems: [...state.sidemenu.menuItems].sort((a, b) => a.order - b.order),
});
const mapDispatchToProps = (dispatch) => ({
	setMenuItems: (items) => dispatch(setMenuItems(items)),
	toggleIsDraggable: (val) => dispatch(toggleIsDraggable(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
