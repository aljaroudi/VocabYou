import { v2 as GCP } from '@google-cloud/translate'
import { DICT_KEY, GOOGLE_APPLICATION_CREDENTIALS as key } from '$env/static/private'
import { WordDefSchema } from './types'
import type { WordDef } from './types-with-jsdoc'

const translator = new GCP.Translate({ key })

/**
 * Translates the given text to the target language.
 * @param text The text to be translated.
 * @param target The target language code to translate the text to.
 * @returns translated text
 */
export async function translate(text: string, target: string) {
	return translator
		.translate([text], target)
		.then(([translation]) => translation?.[0])
		.catch(() => null)
}

export async function define(phrase: string): Promise<WordDef[]> {
	return fetch(
		`https://www.dictionaryapi.com/api/v3/references/learners/json/${phrase}?key=${DICT_KEY}`
	)
		.then(res => res.json())
		.then(res => WordDefSchema.array().assert(res))
		.catch(() => [])
}

export async function getPhrase(phrase: string, target: string) {
	const [def, translated] = await Promise.all([define(phrase), translate(phrase, target)])
	return { def, translated }
}

export type APIResponse = Awaited<ReturnType<typeof getPhrase>>
