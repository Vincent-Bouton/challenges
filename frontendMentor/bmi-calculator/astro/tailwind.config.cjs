/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary':'#345FF6',
			'gunmetal':'#253347',
			'dark-electric-blue': '#5E6E85',
			'borders':'#D8E2E7',
			'pure-white': '#FFFFFF'
		},
		fontFamily:{
			'primary':['Inter', ...defaultTheme.fontFamily.sans]
		},
		fontSize:{
			hxl : '4rem',
			hlg:'3rem',
			hmd:'1.5rem',
			hsm:'1.25rem',
			bmd:'1rem',
			bsm:'0.875rem',
		},
		lineHeight : {
			110: '110%',
			150: '150%'
		}

	},
	plugins: [],
}
