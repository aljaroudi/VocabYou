<script lang="ts">
	import type { WordDef } from '$lib/types'
	import Word from '$lib/Word.svelte'
	import { getWord, getWords } from '$lib/store'
	import { onMount } from 'svelte'

	let words = new Map<string, WordDef[]>()
	onMount(() => {
		words = getWords()
	})

	let newWord: string

	async function handleAddWord() {
		if (newWord.length < 3) return

		await getWord(newWord)
		words = getWords()
        console.log('rerendered')
	}
</script>

<!-- input to add a new word -->
<div class="flex w-full gap-2">
	<input
		type="text"
		class="h-8 w-full rounded-md border border-slate-200 px-2 text-sm shadow-sm"
		placeholder="Add..."
		name="word"
		bind:value={newWord}
	/>
	<button
		type="submit"
		class="h-8 w-8 rounded-md bg-indigo-600 p-1 font-semibold text-white shadow-sm"
		on:click={handleAddWord}>+</button
	>
</div>
<ul>
	{#each words as word, i}
		<li class="py-2">
			<Word {word} />
		</li>
	{/each}
</ul>
