import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { getPhrase } from '$lib/api.server'

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const phrase = searchParams.get('phrase')
	const target = searchParams.get('target')
	if (!phrase || phrase.length < 2 || !target) return json({ success: false })

	return json(await getPhrase(phrase))
}
