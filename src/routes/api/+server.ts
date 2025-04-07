import type { WordDef } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { DICT_KEY } from '$env/static/private'
import { translate } from '$lib/translate.server'

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const phrase = searchParams.get('phrase')
	const target = searchParams.get('target')
	if (!phrase || phrase.length < 2 || !target) return json({ phrase: null })

	return json({
		def: await define(phrase),
		translated: await translate([phrase], target)
	})
}

async function define(phrase: string): Promise<WordDef[]> {
	return fetch(
		`https://www.dictionaryapi.com/api/v3/references/learners/json/${phrase}?key=${DICT_KEY}`
	)
		.then(res => res.json())
		.then(res => (typeof res[0][0] !== 'string' ? res : []))
		.catch(err => {
			console.error('callAPI', err)
			return []
		})
}
