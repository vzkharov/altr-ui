import { useEvent } from './useEvent'

const useScroll = (callback: Function, immediatelyInvoke: boolean = true): void =>
	useEvent('scroll', callback, { immediatelyInvoke })

export { useScroll }
