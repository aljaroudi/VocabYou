<script lang="ts">
	import type { WordDef } from '$lib/types'
	import Word from '$lib/Word.svelte'
	import { getWord, getWords } from '$lib/store'
	import { onMount } from 'svelte'

	let words = new Map<string, WordDef[]>()
	onMount(() => {
		words = getWords()
	})

	async function handleAddWord(newWord: string) {
		if (newWord.length < 3) return
		await getWord(newWord)
		words = getWords()
	}
</script>

<div class="flex w-full gap-2">
	<input
		type="text"
		class="h-8 w-full rounded-md border border-slate-200 px-2 my-2 text-sm shadow-sm"
		placeholder="Search..."
		name="word"
        on:keydown={e => {
            if (e.key !== 'Enter') return
            const newWord = e.currentTarget?.value
            if (newWord) handleAddWord(newWord)
        }}
	/>
</div>
<ul>
	{#each words as word}
		<li class="py-2">
			<Word {word} />
		</li>
	{/each}
</ul>
