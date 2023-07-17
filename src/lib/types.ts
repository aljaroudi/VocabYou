export interface WordDef {
	/** Metadata */
	meta: Meta
	/** Headword information */
	hwi: {
		/** headword */
		hw: string
		/** pronunciations */
		prs?: Pronunciation[]
	}
	/** Functional label */
	fl?: string
	/** the change of form that words undergo in different grammatical contexts, such as tense or number */
	ins?: Inflection[]
	/** all the sense sequences and verb dividers for */
	def?: { sseq: unknown }[]
	shortdef: string[]
	gram?: string
}

export interface Pronunciation {
	ipa: string
	/** audio playback information */
	sound: {
		/** base filename for audio playback */
		audio: string
	}
}
/** the change of form that words undergo in different grammatical contexts, such as tense or number */
export interface Inflection {
	/** inflection label spelled out, like `weird*os`  */
	if: string
	/** inflection label */
	il?: string
	/** pronunciation */
	prs?: Pronunciation[]
}

export interface Meta {
	id: string
	/** if the headword is a key part of English vocabulary */
	highlight?: 'yes'
	stems: string[]
	'app-shortdef'?: AppShortdef | null
	offensive: boolean
}
/** [shortened view] a very abbreviated version of the entry that could be used in specialized contexts where a preview or shortened entry view is needed */
export interface AppShortdef {
	/** headword */
	hw: string
	/** functional label (noun, verb, ...) */
	fl: string
	/** definition text for the first three senses */
	def: string[]
}

export interface Target {
	tuuid: string
	tsrc: string
}

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
						// console.log(t)
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
	return audio
		? {
				'audio/mp3': `https://media.merriam-webster.com/audio/prons/en/us/mp3/${audio[0]}/${audio}.mp3`,
				'audio/wav': `https://media.merriam-webster.com/audio/prons/en/us/wav/${audio[0]}/${audio}.wav`,
				'audio/ogg': `https://media.merriam-webster.com/audio/prons/en/us/ogg/${audio[0]}/${audio}.ogg`
		  }
		: undefined
}
