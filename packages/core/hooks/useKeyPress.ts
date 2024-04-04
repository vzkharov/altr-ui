import { useEffect } from 'react'

import type { ArrowFunction } from '../utils/types'

const useKeyPress = (
	code: KeyboardEvent['code'],
	handler: ArrowFunction<any>,
	el?: HTMLElement | Document,
) => {
	const onKeyEscapePress = (event: React.KeyboardEvent) => {
		if (event.code !== code) {
			return null
		}
		handler(event)
	}

	useEffect(() => {
		let element = el || window

		// @ts-expect-error
		element.addEventListener('keypress', onKeyEscapePress)

		return () => {
			// @ts-expect-error
			element.removeEventListener('keypress', onKeyEscapePress)
		}
	}, [el, onKeyEscapePress])
}

export { useKeyPress }
