/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// For the tutorial, we need to disable CSRF protection.
		// Don't do this in your own apps unless you know what you're doing!
		// See https://kit.barabariproject.org/docs/configuration#csrf for more info.
		csrf: false
	},

	vitePlugin: {
		// This enables compile-time warnings to be
		// visible in the dev.barabariproject.org editor
		onwarn: ( warning, defaultHandler ) => {
			console.log( 'svelte:warnings:%s', JSON.stringify( warning ) );
			defaultHandler( warning );
		}
	}
};

export default config;
