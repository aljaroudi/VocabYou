/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
import { build, files, version } from '$service-worker'

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`

const ASSETS = [
	...build, // the app itself
	...files // everything in `static`
]

self.addEventListener('install', event => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE)
		await cache.addAll(ASSETS)
	}

	// @ts-expect-error waitUntil is not available on type Event
	event.waitUntil(addFilesToCache())
})

self.addEventListener('activate', event => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key)
		}
	}

	// @ts-expect-error waitUntil is not available on type Event
	event.waitUntil(deleteOldCaches())
})

self.addEventListener('fetch', event => {
	// ignore POST requests etc
	// @ts-expect-error request is not available on type Event
	if (event.request.method !== 'GET') return

	async function respond() {
		// @ts-expect-error request is not available on type Event
		const url = new URL(event.request.url)
		const cache = await caches.open(CACHE)

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname)

			if (response) {
				return response
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			// @ts-expect-error request is not available on type Event
			const response = await fetch(event.request)

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch')
			}

			if (response.status === 200) {
				// @ts-expect-error request is not available on type Event
				cache.put(event.request, response.clone())
			}

			return response
		} catch (err) {
			// @ts-expect-error request is not available on type Event
			const response = await cache.match(event.request)

			if (response) {
				return response
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err
		}
	}
	// @ts-expect-error respondWith is not available on type Event
	event.respondWith(respond())
})
