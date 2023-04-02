/** @type {import('tailwindcss').Config} */
module.exports={
	content: ["index.html",
		"./src/populateProductCard.js"],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
};
