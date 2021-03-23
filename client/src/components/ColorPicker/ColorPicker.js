import StyledColorPicker from "./ColorPickerStyles";

const primaryColors = [
	"#E27D60",
	"#3e5fad",
	"#659dbd",
	"#5cdb95",
	"#ff4d47",
	"#116466",
	"#00929c",
	"#a23dc2",
	"#a0c520",
];

const secondaryColors = [
	"#5d5c69",
	"#231314",
	"#01203d",
	"#1f2605",
	"#17302a",
	"#323D58",
	"#1f2833",
	"#333333",
	"#002d31",
];

const ColorPicker = ({ setColor, type }) => (
	<StyledColorPicker id="color-picker">
		{type === "primary"
			? primaryColors.map((color) => (
					<div
						key={color}
						style={{ background: color }}
						onClick={() => setColor({[type]: color})}
					></div>
			  ))
			: secondaryColors.map((color) => (
					<div
						key={color}
						style={{ background: color }}
						onClick={() => setColor({[type]: color})}
					></div>
			  ))}
	</StyledColorPicker>
);

export default ColorPicker;
