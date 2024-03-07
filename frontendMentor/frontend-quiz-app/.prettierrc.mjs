/** @type {import("prettier").Config} */
export default {
	tailwindConfig: './tailwind.config.mjs',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};