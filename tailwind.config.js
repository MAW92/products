/** @type {import('tailwindcss').Config} */
module.exports={
	content:
		[
			"./index.html",
			"./src/JS/filterData.js",
			"./src/JS/Buttons/*.{html,js}"
		],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
