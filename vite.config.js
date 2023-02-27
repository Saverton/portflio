import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 4000,
		proxy: {
			'/api': 'https://meadows-portfolio.onrender.com'
		}
	}
});
