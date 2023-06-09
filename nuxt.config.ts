import { fileURLToPath, URL } from 'node:url'
import eslintPlugin from 'vite-plugin-eslint'

export default {
	ssr: false,
	target: 'static',
	app: {
	head: {
		title: 'Fronkai',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/logo.svg' }]
	}
	},

	alias: {
		'@': './src'
	},

	css: ['/src/assets/css/main.css', 'primeicons/primeicons.css'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],
	modules: ['@nuxtjs/tailwindcss'],

	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		},
		transpile: ['primevue']
	},
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	tailwindcss: {
		cssPath: '@/assets/css/main.css'
	},
	vite: {
		plugins: [
			eslintPlugin({ useEslintrc: true })
		],
		server: {
			watch: {
				usePolling: true
			}
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
}
