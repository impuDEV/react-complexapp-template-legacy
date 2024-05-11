import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
// https://react-svgr.com/docs/options/
export default defineConfig({
	plugins: [
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
		react(),
	],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	define: {
		__IS_DEV__: JSON.stringify(true),
		__API__: JSON.stringify('http://localhost:8000'),
		__PROJECT__: JSON.stringify('frontend'),
	},
})
