/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js}'],
	theme: {
		colors:{
			primary: "#D0D6f9",
			black: "#0b0d17",
			white:"#ffffff"
		},
		fontFamily: {
			'barlow': ['Barlow', 'sans-serif'],
			'bellefair': ['Bellefair', 'serif'],
			'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
		},
		fontSize: {
			'body': '1.125em', // 18px
			'body-md': '1em', // 16px
			'body-sm': '0.9375em', // 15px
			'heading-1': '9.375em', // 150px
			'heading-2': '6.25em', // 100px
			'heading-3': '3.5em', // 56px
			'heading-4': '2em', // 32px
			'heading-5': '1.75em', // 28px
			'subheading-1': '1.75em', // 28px
			'subheading-2': '0.875em', // 14px
			'nav': '1em', // 16px
		},
		letterSpacing: {
			'heading-5' : "4.75px",
			'subheading-2' : "2.35px",
			'nav': "2.7px"
		},
		screens: {
			'2xl': {'max': '1535px'},
			'xl': {'max': '1279px'},
			'lg': {'max': '1023px'},
			'md': {'max': '767px'},
			'sm': {'max': '639px'},
			// custom
			'desktop': {'min':'1440px'},
			'tablet': {'max':'768px'},
			'mobile': {'max':'375px'}


		}
	},
	plugins: [],
}
