import adapter from '@sveltejs/adapter-auto';
import { Config } from '@sveltejs/kit';
import preprocess from 'svelte-preprocess';

const config:Config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter()
	}
};

export default config;
