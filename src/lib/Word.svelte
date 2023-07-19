<script lang="ts">
	import { audioLink, extractSentence, type WordDef } from './types'

	export let word: readonly [string, WordDef[], string | undefined]
	const [phrase, defs, translated] = word
	const meanings = defs
		.filter(w => w.shortdef.length > 0 && w.shortdef[0].length > 10)
		.slice(0, 3)
		.map(meaning => ({
			func: meaning.fl,
			shortdef: meaning.shortdef.at(0),
			sentence: extractSentence(meaning).at(0)
		}))
	const audio = audioLink(defs[0])
	const pronunciation = defs[0].hwi.prs?.[0].ipa ?? defs[0].hwi.hw
</script>

<div
	class="flex max-w-md flex-col rounded-2xl border border-slate-200 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
>
	<h2 class="flex items-center px-1 text-xl font-semibold">
		{phrase}
		<span class="font-mono text-sm font-light italic text-slate-600 dark:text-slate-400">
			{pronunciation}
		</span>

		{#if translated}
			<span class="ml-auto text-sm font-light text-slate-600 dark:text-slate-400">
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

	<ul class="list-inside list-disc pb-1 text-sm text-slate-800 dark:text-slate-100">
		{#each meanings as { func, shortdef, sentence }}
			<li
				class="mt-3 list-none rounded-xl border border-slate-100 bg-slate-50 px-1 shadow-sm dark:border-none dark:bg-slate-800"
			>
				{#if func}
					<p class="py-1 text-xs italic text-slate-500">{func}</p>
				{/if}
				{#if shortdef}
					<p class="py-1 pl-1">{shortdef}</p>
				{/if}
				{#if sentence}
					<p class="py-1 pl-1 text-sm text-slate-600 dark:text-slate-100">‟{sentence}”</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
