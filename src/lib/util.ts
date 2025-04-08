import type { WordDef } from './types-with-jsdoc'

export function extractSentence(word: WordDef) {
	if (!word.def) return []
	const sentences: string[] = []

	for (const { sseq } of word.def) {
		if (!Array.isArray(sseq)) continue

		for (const sub1 of sseq) {
			if (!Array.isArray(sub1)) continue

			for (const sub2 of sub1) {
				if (!Array.isArray(sub2) || !(sub2[0] === 'sense')) continue

				const dt = sub2[1]['dt']
				if (!Array.isArray(dt)) continue

				for (const item of dt) {
					if (!Array.isArray(item) || item[0] !== 'vis') continue

					for (const { t } of item[1]) {
						// remove anything between { and }
						sentences.push(t.replace(/{.*?}/g, ''))
					}
				}
			}
		}
	}
	return sentences
}

export function audioLink(word: WordDef) {
	const audio = word.hwi.prs?.[0]?.sound?.audio
	if (!audio) return undefined
	return {
		'audio/mp3': `https://media.merriam-webster.com/audio/prons/en/us/mp3/${audio[0]}/${audio}.mp3`,
		'audio/wav': `https://media.merriam-webster.com/audio/prons/en/us/wav/${audio[0]}/${audio}.wav`,
		'audio/ogg': `https://media.merriam-webster.com/audio/prons/en/us/ogg/${audio[0]}/${audio}.ogg`
	}
}

export function isStrArray(arr: unknown): arr is string[] {
	return Array.isArray(arr) && arr.every(item => typeof item === 'string')
}

export async function definePhrase(phrase: string) {
	phrase = phrase.toLowerCase().trim()
	if (phrase.length === 0) return
	return fetch('/api?phrase=' + phrase)
		.then(res => res.json())
		.then(def => {
			if (typeof def[0][0] === 'string') return null
			return def as WordDef[]
		})
		.catch(err => {
			console.error('Failed to fetch word:', err)
			return null
		})
}
