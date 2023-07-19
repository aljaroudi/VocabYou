import { v2 as GCP } from '@google-cloud/translate'
import { GOOGLE_APPLICATION_CREDENTIALS as key } from '$env/static/private'

const translator = new GCP.Translate({ key })

/**
 * Translates the given text to the target language.
 * @param text The text to be translated.
 * @param target The target language code to translate the text to.
 * @returns translated text
 */
export async function translate(text: string[], target: string): Promise<string[] | null> {
	return await translator
		.translate(text, target)
		.then(([translation]) => translation)
		.catch(() => null)
}
