<script>
	import '../app.css'
	import { dev } from '$app/environment'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	let { children } = $props()

	injectAnalytics({ mode: dev ? 'development' : 'production' })
</script>

<main class="flex flex-col items-center w-full h-dvh">
	{@render children()}
</main>

<style>
	main {
		max-width: 80ch;
		margin: 0 auto;
	}
</style>
