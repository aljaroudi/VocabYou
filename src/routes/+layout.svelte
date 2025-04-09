<script>
	import '../app.css'

	let { children } = $props()
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
