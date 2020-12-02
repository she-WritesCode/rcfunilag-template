module.exports = {
	purge: [],
	theme: {
		height: {
  +		sm: '8px',
  +     md: '16px',
  +     lg: '24px',
  +     xl: '48px',
		}
	 }
}
		extend: {},
	},
	variants: {
		extend: {
	+	height: ['hover', 'focus'],
		backgroundColor: ["responsive", "hover", "focus", "active"],
		textColor: ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
};
