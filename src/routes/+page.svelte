<script lang="ts">
	import Word from '$lib/Word.svelte'
	import { getWord, getWords } from '$lib/store'
	import langs from '$lib/langs.json'

	$: words = getWords()
	let targetLang: string

	async function handleAddWord({ value }: EventTarget & HTMLInputElement) {
		if (value.length < 2) return
		words = await getWord(value.toLowerCase().trim())
		value = ''
	}

	async function translate(texts: string[]): Promise<string[] | null> {
		return await fetch(`/api/translate?texts=${texts.join(',')}&target=${targetLang}`)
			.then(res => res.json())
			.then(res => {
				if (!Array.isArray(res) || typeof res[0] !== 'string') return null
				return res.length === texts.length ? (res as string[]) : null
			})
			.catch(err => {
				console.error(err)
				return null
			})
	}

	async function translated(_words: typeof words, targetLang: string = 'ar') {
		const array = Array.from(_words)
		const texts = array.map(([word]) => word)
		const translated = await translate(texts)
		return array.map(([word, defs], i) => [word, defs, translated?.at(i)] as const)
	}
</script>

<div class="mx-auto flex h-12 w-full max-w-md gap-2 py-2 text-sm dark:text-slate-100">
	<input
		type="text"
		class="w-full rounded-lg border border-slate-200 px-2 shadow-sm dark:border-slate-500 dark:bg-slate-900"
		placeholder="Learn a new word..."
		on:keydown={e => e.key === 'Enter' && handleAddWord(e.currentTarget)}
	/>
	<select
		class="rounded-lg border border-slate-200 px-2 shadow-sm dark:border-slate-500 dark:bg-slate-900"
		bind:value={targetLang}
	>
		{#each langs as [value, label]}
			<option {value} selected={value === targetLang}>{label}</option>
		{/each}
	</select>
</div>
<ul>
	{#if words.size > 0}
		{#await translated(words, targetLang)}
			<li>Loading...</li>
		{:then words}
			{#each words as word}
				<Word {word} />
			{/each}
		{:catch error}
			<li>{error.message}</li>
		{/await}
	{:else}
		<li class="text-center">it's mt...</li>
	{/if}
</ul>
