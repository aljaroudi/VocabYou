import { kv } from '@vercel/kv'
import type { WordDef } from './types'

export async function fetchKV(phrase: string) {
	return await kv.get<WordDef[]>(phrase)
}

export async function storeKV(phrase: string, data: WordDef[]) {
	await kv.set(phrase, data)
}
