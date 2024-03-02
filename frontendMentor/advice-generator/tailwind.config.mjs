/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			darkBlue: '#202733',
			darkGrayishBlue: '#313A48',
			grayIshBlue: '#4F5D74',
			lightCyan: '#CEE3E9',
			neonGreen: '#53FFAA'
		},
		fontFamily: {
			sans:['Manrope', 'sans-serif']
		},
		fontSize:{
			heading:"13px",
			quote: '28px',
		},
		extend: {},
	},
	plugins: [],
}
