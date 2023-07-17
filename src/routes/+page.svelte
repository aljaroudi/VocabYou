<script lang="ts">
	import Word from '$lib/Word.svelte'
	import { getWord, getWords } from '$lib/store'

	$: words = getWords()

	async function handleAddWord(e: EventTarget & HTMLInputElement) {
		const { value } = e
		if (value.length < 2) return
		words = await getWord(value)
		e.value = ''
	}
</script>

<input
	type="text"
	class="mx-auto my-2 w-full max-w-md rounded-lg border border-slate-200 px-2 py-1 text-sm shadow-sm"
	placeholder="Learn a new word..."
	on:keydown={e => e.key === 'Enter' && handleAddWord(e.currentTarget)}
/>
<ul>
	{#each Array.from(words).slice() as word}
		<li class="py-2">
			<Word {word} />
		</li>
	{/each}
</ul>
