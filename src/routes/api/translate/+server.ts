import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { translate } from '$lib/translate.server'

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const phrase = searchParams.get('texts')?.split(',')
	const target = searchParams.get('target')
	if (!phrase || !target) return json(null)

	return json(await translate(phrase, target))
}
