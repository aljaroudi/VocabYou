export type WordDef = {
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

export type Pronunciation = {
	ipa: string
	/** audio playback information */
	sound?: {
		/** base filename for audio playback */
		audio: string
	}
}
/** the change of form that words undergo in different grammatical contexts, such as tense or number */
export type Inflection = {
	/** inflection label spelled out, like `weird*os`  */
	if: string
	/** inflection label */
	il?: string
	/** pronunciation */
	prs?: Pronunciation[]
}

export type Meta = {
	id: string
	/** if the headword is a key part of English vocabulary */
	highlight?: 'yes'
	stems: string[]
	'app-shortdef'?: AppShortdef | null
	offensive: boolean
}
/** [shortened view] a very abbreviated version of the entry that could be used in specialized contexts where a preview or shortened entry view is needed */
export type AppShortdef = {
	/** headword */
	hw: string
	/** functional label (noun, verb, ...) */
	fl: string
	/** definition text for the first three senses */
	def: string[]
}
