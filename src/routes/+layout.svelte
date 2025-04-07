<script lang="ts">
	import '../app.css'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<main
	class="flex h-full min-h-screen w-full flex-col items-center p-2 dark:bg-stone-900 bg-stone-300"
>
	{@render children()}
</main>
