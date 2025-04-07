<script lang="ts">
	import Word from '$lib/Word.svelte'
	import langs from '$lib/langs.json'
	import type { APIResponse } from '$lib/types'
	import { SvelteMap } from 'svelte/reactivity'

	let words = new SvelteMap<string, APIResponse>()
	let targetLang = $state('es')
	let loading = $state(false)

	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem('words')
		if (stored) {
			try {
				const parsed = JSON.parse(stored)
				for (const [key, value] of Object.entries(parsed)) {
					words.set(key, value as APIResponse)
				}
			} catch {}
		}
		$effect(() => {
			const obj = Object.fromEntries(words)
			localStorage.setItem('words', JSON.stringify(obj))
		})
	}
</script>

<div class="mx-auto flex h-12 w-full max-w-md gap-2 py-2 text-sm dark:text-stone-100">
	<input
		type="text"
		class="w-full rounded border border-stone-400 px-2 shadow-xs dark:border-stone-700 dark:bg-stone-900"
		placeholder="Learn a new word..."
		onkeydown={async e => {
			if (e.key !== 'Enter') return
			const text = e.currentTarget.value.trim()
			if (!text || text.length < 2) return

			loading = true
			void fetch(`/api?phrase=${text}&target=${targetLang}`)
				.then(res => res.json())
				.then((data: APIResponse) => {
					words.set(text, data)
				})
				.catch(() => alert('Failed'))

			e.currentTarget.value = ''
			e.currentTarget.blur()
			loading = false
		}}
	/>
	<select
		class="rounded-lg border border-stone-200 px-2 shadow-xs dark:border-stone-500 dark:bg-stone-900"
		bind:value={targetLang}
	>
		{#each langs as [value, label]}
			<option {value} selected={value === targetLang}>{label}</option>
		{/each}
	</select>
</div>
<ul>
	{#if loading}
		<li class="text-center">Loading...</li>
	{/if}
	{#each [...words].reverse() as [phrase, word] (phrase)}
		<Word {phrase} {word} />
	{/each}
	{#if words.size === 0 && !loading}
		<li class="text-center">Add a word to get started</li>
	{/if}
</ul>
