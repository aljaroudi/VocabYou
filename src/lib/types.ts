export interface WordDef {
	meta: Meta
	hom?: number
	hwi: Hwi
	fl?: string
	ins?: WordDefIn[]
	def?: WordDefDef[]
	dros?: Dro[]
	usages?: Usage[]
	et?: Array<string[]>
	date?: string
	shortdef: string[]
	uros?: Uro[]
	lbs?: string[]
	dxnls?: string[]
}

export interface WordDefDef {
	vd?: string
	sseq: Array<Array<Array<Array<Array<Sense | SseqEnum>> | PurpleSseq | SseqEnum>>>
}

export interface Sense {
	sn: string
	dt: Array<Array<PurpleDt[] | string>>
}

export interface PurpleDt {
	t: string
}

export type SseqEnum = 'sense' | 'pseq' | 'bs' | 'sen'

export interface PurpleSseq {
	sn?: string
	dt?: Array<Array<Array<Array<Array<PurpleDt[] | string>> | FluffyDt> | string>>
	sdsense?: PurpleSdsense
	sls?: string[]
	sense?: Sense
	ins?: SseqIn[]
}

export interface FluffyDt {
	t: string
	aq?: Aq
}

export interface Aq {
	auth: string
}

export interface SseqIn {
	if: string
	spl: string
}

export interface PurpleSdsense {
	sd: string
	dt: Array<Array<PurpleDt[] | string>>
}

export interface Dro {
	drp: string
	def: DroDef[]
	vrs?: VR[]
}

export interface DroDef {
	sseq: Array<Array<Array<FluffySseq | SseqEnum>>>
}

export interface FluffySseq {
	dt: Array<Array<PurpleDt[] | string>>
	sn?: string
	sdsense?: FluffySdsense
}

export interface FluffySdsense {
	sd: string
	dt: string[][]
}

export interface VR {
	vl: string
	va: string
}

export interface Hwi {
	hw: string
	prs?: PR[]
}

export interface PR {
	mw: string
	sound: Sound
}

export interface Sound {
	audio: string
	ref: string
	stat: string
}

export interface WordDefIn {
	if: string
	prs?: PR[]
	il?: string
}

export interface Meta {
	id: string
	uuid: string
	sort: string
	src: Src
	section: Section
	stems: string[]
	offensive: boolean
}

export type Section = 'alpha'

export type Src = 'collegiate'

export interface Uro {
	ure: string
	prs: PR[]
	fl: string
}

export interface Usage {
	pl: string
	pt: string[][]
}
