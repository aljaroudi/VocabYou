import type { WordDef } from './types'

function verifyBrowser(): void {
	if (typeof window === 'undefined') throw new Error('Not in browser')
}

function addWord(phrase: string, word: WordDef[]) {
	verifyBrowser()
	if (word.length === 0) return
	const words = getWords()
	words.set(phrase, word)
	localStorage?.setItem('words', JSON.stringify([...words]))
}

export function getWords(): Map<string, WordDef[]> {
	verifyBrowser()
	const words = localStorage?.getItem('words')

	return words ? new Map((JSON.parse(words) as [string, WordDef[]][]).reverse()) : new Map()
}

function getWordLocal(phrase: string): WordDef[] {
	verifyBrowser()
	return getWords().get(phrase) ?? []
}

async function fetchWord(phrase: string): Promise<void> {
	verifyBrowser()
	await fetch('/api?phrase=' + phrase)
		.then(res => res.json())
		.then(def => addWord(phrase, def))
		.catch(err => {
			console.error('fetchWord', err)
			return []
		})
}

export async function getWord(phrase: string): Promise<ReturnType<typeof getWords>> {
	verifyBrowser()
	if (getWordLocal(phrase).length === 0) await fetchWord(phrase)
	return getWords()
}
