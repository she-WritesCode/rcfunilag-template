module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				default: "#C4C4C4",
				overlay: "rgba(247, 26, 85, 0.65)",
				secondary: {
					700: "#272727",
					600: "#4A4A4A",
					500: "#8A8A8A",
					400: "#C1C1C1",
					300: "#D7D7D7",
					200: "#F5F5F5",
					100: "#FAFAFA",
				},
				tertiary: {
					700: "#8E45B3",
					600: "#A55FC9",
					500: "#BE80DD",
					400: "#CA95E4",
					300: "#DBAEF1",
					200: "#F2DBFD",
					100: "#F9EEFF",
				},
				primary: {
					700: "#F71A55",
					600: "#FF3369",
					500: "#FA517E",
					400: "#FA779A",
					300: "#F998B2",
					200: "#FFC6D5",
					100: "#FFF0F4",
				},
			},
		},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
		textColor: ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
};
