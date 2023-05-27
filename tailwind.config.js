/** @type {import('tailwindcss').Config} */
module.exports={
	content:
		[
			"./index.html",
			"./src/menu.js",
			"./src/populateProductCard.js",
			"./src/JS/Filters/*.{html,js}",
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
