/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Mohave', 'sans-serif'],
				body: ['Manrope', 'sans-serif']
			}
		}
	},
	plugins: []
};
