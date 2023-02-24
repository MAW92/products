/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./css/**/*.{html,js}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
