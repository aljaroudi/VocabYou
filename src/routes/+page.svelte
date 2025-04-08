<script lang="ts">
	import Word from '$lib/Word.svelte'
	import type { APIResponse } from '$lib/api.server'
	import langs from '$lib/langs.json'
	import { onMount } from 'svelte'
	import { SvelteMap } from 'svelte/reactivity'

	let words = new SvelteMap<string, APIResponse>()
	let targetLang = $state('es')
	let loading = $state(false)

	function getLang() {
		if (typeof navigator === 'undefined') return null
		const browserLang = navigator.language.split('-')[0]
		if (langs.some(([key]) => key === browserLang)) return browserLang
		return null
	}

	onMount(() => {
		if (typeof localStorage === 'undefined') return
		const stored = localStorage.getItem('targetLang')
		if (stored) targetLang = stored
		const browserLang = getLang()
		if (browserLang) targetLang = browserLang
	})

	$effect(() => {
		if (typeof localStorage === 'undefined') return
		localStorage.setItem('targetLang', targetLang)
	})

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
			await fetch(`/api?phrase=${text}&target=${targetLang}`)
				.then(res => res.json())
				.then((data: APIResponse) => words.set(text, data))
				.catch(() => alert('Failed'))

			if (e.currentTarget) {
				e.currentTarget.value = ''
				e.currentTarget.blur()
			}
			loading = false
		}}
	/>
	<select
		class="rounded border border-stone-400 px-2 shadow-xs dark:border-stone-700 dark:bg-stone-900"
		bind:value={targetLang}
	>
		{#each langs as [value, label]}
			<option {value} selected={value === targetLang}>{label}</option>
		{/each}
	</select>
	<button
		class="rounded border border-rose-400 px-2 shadow-xs dark:border-rose-900 dark:bg-rose-900/30"
		onclick={() => confirm('Are you sure you want to clear all?') && words.clear()}
	>
		Clear
	</button>
</div>
<ul>
	{#if loading}
		<li class="text-center dark:text-stone-400">Loading...</li>
	{/if}
	{#each [...words].reverse() as [phrase, word] (phrase)}
		<Word {phrase} {word} />
	{/each}
	{#if words.size === 0 && !loading}
		<li class="text-center dark:text-stone-400">Add a word to get started</li>
	{/if}
</ul>
