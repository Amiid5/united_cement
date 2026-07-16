import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Optional runtime config
			runtime: 'nodejs20.x'
			// regions: ['iad1'], // uncomment to pin regions
			// split: false,      // set true to split routes into separate functions
		})
	}
};

export default config;
