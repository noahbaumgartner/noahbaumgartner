/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			black: '#000',
			white: '#fff',
			green: '#283618',
			beige: '#F9F7F1',
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
