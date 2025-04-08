import { type } from 'arktype'

const schema = type
	.scope({
		WordDef: {
			meta: 'Meta',
			hwi: {
				hw: 'string',
				prs: 'Pronunciation[]?'
			},
			fl: 'string?',
			ins: 'Inflection[]?',
			def: 'Def[]?',
			shortdef: 'string[]',
			gram: 'string?'
		},
		AppShortdef: {
			hw: 'string',
			fl: 'string',
			def: 'string[]'
		},
		Meta: {
			id: 'string',
			highlight: '"yes"?',
			stems: 'string[]',
			'app-shortdef': 'AppShortdef',
			offensive: 'boolean'
		},
		Pronunciation: {
			ipa: 'string',
			'sound?': {
				audio: 'string'
			}
		},
		Inflection: {
			if: 'string',
			il: 'string?',
			prs: 'Pronunciation[]?'
		},
		Def: {
			sseq: 'unknown[]'
		}
	})
	.export()

export const WordDefSchema = schema.WordDef
