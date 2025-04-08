<script lang="ts">
	import type { APIResponse } from '$lib/api.server'
	import IconArrowUp from './IconArrowUp.svelte'
	import IconTrash from './IconTrash.svelte'
	import { audioLink, extractSentence } from './util'

	let {
		phrase,
		word,
		remove,
		moveToTop
	}: { phrase: string; word: APIResponse; remove: VoidFunction; moveToTop: VoidFunction } = $props()
	const { def: defs, translated } = word
	const meanings = defs
		.filter(w => w.shortdef.length > 0 && w.shortdef[0].length > 10)
		.slice(0, 5)
		.map(meaning => ({
			func: meaning.fl,
			shortdef: meaning.shortdef.at(0),
			sentence: extractSentence(meaning).at(0)
		}))
	const firstDef = defs.at(0)
	const audio = firstDef ? audioLink(firstDef) : undefined
	const pronunciation = firstDef?.hwi?.prs?.[0]?.ipa ?? firstDef?.hwi?.hw
</script>

<div
	class="mb-2 flex max-w-md flex-col rounded-xl border border-stone-400 px-2 py-1 shadow-md dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 group"
>
	<h2 class="flex items-center px-1 text-xl font-semibold">
		{phrase}
		<span class="font-mono text-sm font-light italic text-stone-600 dark:text-stone-400">
			&nbsp;{pronunciation}
		</span>

		{#if translated}
			<span class="ml-auto text-sm font-light text-stone-600 dark:text-stone-400">
				{translated}
			</span>
		{/if}
	</h2>

	{#if audio}
		<audio controls class="w-full">
			{#each Object.entries(audio) as [type, src]}
				<source {src} {type} />
			{/each}
		</audio>
	{/if}

	<ul class="list-inside list-disc pb-1 text-sm text-stone-800 dark:text-stone-100">
		{#each meanings as { func, shortdef, sentence }}
			<li
				class="mt-3 list-none rounded-xl border border-stone-100 bg-stone-50 px-1 py-2 shadow-xs dark:border-none dark:bg-stone-700 flex flex-col gap-2"
			>
				{#if func}
					<i class="text-xs text-stone-400">{func}</i>
				{/if}
				{#if shortdef}
					<p class="pl-1">{shortdef}</p>
				{/if}
				{#if sentence}
					<p class="pl-1 text-sm text-stone-600 dark:text-stone-100">‟{sentence}”</p>
				{/if}
			</li>
		{/each}
	</ul>
	<div class="flex justify-between gap-2 px-2">
		<button class="p-2 text-rose-500" onclick={remove} type="button">
			<IconTrash />
		</button>
		<button class="p-2 group-first:hidden" onclick={moveToTop} type="button">
			<IconArrowUp />
		</button>
	</div>
</div>
