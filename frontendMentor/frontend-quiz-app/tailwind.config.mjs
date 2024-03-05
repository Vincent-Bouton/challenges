/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html}'],
	theme: {
		colors:{
			primary:{
				idle: '#A729F5',
				hover: '#D394FA',
			},
			selection:{
				pink:'#F6E7FF',
				green:'#E0FDEF',
				orange: '#FFF1E9',
				blue: '#EBF0FF'
			},
			green: '#26D782',
			red: '#EE5454',
			white: '#FFFFFF',
			lightGrey : '#F4f6FA',
			lightBlueish : '#ABC1E1',
			greyNavy : '#626C7F',
			navy : '#3B4D66',
			darkNavy : '#313E51'
		},
		fontFamily : {
			'sans': ['Rubik', 'sans-serif'],
		},
		fontSize: {
			'display': '144px',
			'headingL': '64px',
			'headingM': '36px',
			'headingS': '28px',
			'bodyM': '12px'
		},
		fontWeight: {
			'regular': 400,
			'medium': 500,
		},
		extend: {},
	},
	plugins: [],
}
