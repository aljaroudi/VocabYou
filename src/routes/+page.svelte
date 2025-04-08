<script lang="ts">
	import IconLoading from '$lib/IconLoading.svelte'
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

<form
	class="mx-auto flex h-12 w-full max-w-md gap-2 py-2 text-sm dark:text-stone-100"
	onsubmit={async e => {
		if (!(e.target instanceof HTMLFormElement)) return
		e.preventDefault()
		loading = true
		const phrase = new FormData(e.target).get('phrase')?.toString()
		if (!phrase) return
		await fetch(`/api?phrase=${phrase}&target=${targetLang}`)
			.then(res => res.json())
			.then((data: APIResponse) => words.set(phrase, data))
			.catch(() => alert('Failed'))
		loading = false
		e.target.reset()
		e.target.blur()
	}}
>
	<input
		type="text"
		class="w-full rounded border border-stone-400 px-2 shadow-xs dark:border-stone-700 dark:bg-stone-900"
		placeholder="Learn a new word..."
		name="phrase"
		minlength={2}
		pattern="[a-zA-Z ]+"
		oninput={e => {
			const input = e.target as HTMLInputElement
			const value = input.value
			const sanitized = value.replace(/[^a-zA-Z ]/g, '').trimStart()
			if (value !== sanitized) input.value = sanitized
		}}
		title="Only English letters are allowed"
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
		type="button"
	>
		Clear
	</button>
</form>
<ul>
	{#if loading}
		<li class="mx-auto flex py-2 items-center justify-center text-stone-500">
			<IconLoading />
		</li>
	{/if}
	{#each [...words].reverse() as [phrase, word] (phrase)}
		<Word
			{phrase}
			{word}
			remove={() => words.delete(phrase)}
			moveToTop={() => {
				words.delete(phrase)
				words.set(phrase, word)
			}}
		/>
	{/each}
	{#if words.size === 0 && !loading}
		<li class="text-center dark:text-stone-400">Add a word to get started</li>
	{/if}
</ul>
