/** @type {import('tailwindcss').Config} */
module.exports={
	content:
		[
			"./index.html",
			"./src/JS/menu.js",
			"./src/JS/populateProductCard.js",
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
