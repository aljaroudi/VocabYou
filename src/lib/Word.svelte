<script lang="ts">
	import { audioLink, extractSentence, type WordDef } from './types'

	export let word: [string, WordDef[]]
	const def = word[1][0]
	const meanings = word[1]
		.filter(w => w.shortdef.length > 0 && w.shortdef[0].length > 10)
		.slice(0, 3)
		.map(meaning => ({
			func: meaning.fl,
			shortdef: meaning.shortdef.at(0),
			sentence: extractSentence(meaning).at(0)
		}))
	const audio = audioLink(def)
</script>

<div class="flex max-w-md flex-col rounded-xl border border-slate-200 p-3 shadow-sm">
	<h2 class="text-xl font-semibold">
		{word[0]}
		<span class="font-mono text-sm font-light italic text-slate-600">
			{def.hwi.prs?.[0].ipa ?? def.hwi.hw}
		</span>
		{#if audio}
			<audio controls class="w-full">
				{#each Object.entries(audio) as [type, src]}
					<source {src} {type} />
				{/each}
			</audio>
		{/if}
	</h2>

	<ul class="list-inside list-disc text-sm text-slate-800">
		{#each meanings as { func, shortdef, sentence }}
			<li class="my-3 list-none rounded-xl border border-slate-100 bg-slate-50 px-1 shadow-sm">
				{#if func}
					<p class="py-1 text-xs italic text-slate-500">{func}</p>
				{/if}
				{#if shortdef}
					<p class="py-1 pl-1">{shortdef}</p>
				{/if}
				{#if sentence}
					<p class="py-1 pl-1 text-sm text-slate-600">‟{sentence}”</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
