/** @type {import('tailwindcss').Config} */
module.exports={
	content:
		[
			"./index.html",
			"./src/JS/*.{html,js}",
			"./src/JS/filters/*.{html,js}"
		],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
