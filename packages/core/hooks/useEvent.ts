import { useEffect } from 'react'

type UseEventOpts = {
	immediatelyInvoke: boolean
}

const useEvent = <Event extends keyof WindowEventMap>(
	event: Event,
	callback: Function,
	{ immediatelyInvoke }: UseEventOpts = { immediatelyInvoke: true },
): void => {
	useEffect(() => {
		const fn = () => callback()

		if (immediatelyInvoke) {
			fn()
		}
		window.addEventListener<Event>(event, fn)

		return () => {
			window.removeEventListener<Event>(event, fn)
		}
	}, [])
}

export { useEvent }
