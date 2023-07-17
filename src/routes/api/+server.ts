import type { WordDef } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { DICT_KEY } from '$env/static/private'

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const phrase = searchParams.get('phrase')
	if (!phrase || phrase.length < 2) return json({ phrase: '' })

	return json(await callAPI(phrase))
}

async function callAPI(phrase: string): Promise<WordDef[]> {
	return fetch(
		`https://www.dictionaryapi.com/api/v3/references/learners/json/${phrase}?key=${DICT_KEY}`
	)
		.then(res => res.json() as Promise<WordDef[]>)
		.catch(err => {
			console.error('callAPI', err)
			return []
		})
}
