import type { WordDef } from '$lib/types'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { DICT_KEY } from '$env/static/private'
import { fetchKV, storeKV } from '$lib/kv'

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const phrase = searchParams.get('phrase')
	if (!phrase || phrase.length < 2) return json({ phrase: null })

	// check if it's cached to KV
	const cached = await fetchKV(phrase)
	if (cached) return json(cached)

	// otherwise, call API
	const meaning = await callAPI(phrase)
	await storeKV(phrase, meaning)

	return json(meaning)
}

async function callAPI(phrase: string): Promise<WordDef[]> {
	return await fetch(
		`https://www.dictionaryapi.com/api/v3/references/learners/json/${phrase}?key=${DICT_KEY}`
	)
		.then(res => res.json())
		.then(res => (typeof res[0][0] !== 'string' ? res : []))
		.catch(err => {
			console.error('callAPI', err)
			return []
		})
}
