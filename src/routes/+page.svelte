<script lang="ts">
	import Word from '$lib/Word.svelte'
	import { getWord, getWords } from '$lib/store'

	$: words = getWords()

	async function handleAddWord({ value }: EventTarget & HTMLInputElement) {
		if (value.length < 2) return
		words = await getWord(value.toLowerCase())
		value = ''
	}
</script>

<input
	type="text"
	class="mx-auto my-2 w-full max-w-md rounded-lg border border-slate-200 px-2 py-1 text-sm shadow-sm dark:border-slate-500 dark:bg-slate-900 dark:text-slate-100"
	placeholder="Learn a new word..."
	on:keydown={e => e.key === 'Enter' && handleAddWord(e.currentTarget)}
/>
<ul>
	{#each Array.from(words).slice() as word, key (word[0])}
		<li class="py-2">
			<Word {word} />
		</li>
	{/each}
</ul>
