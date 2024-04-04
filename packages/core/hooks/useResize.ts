import { useEvent } from './useEvent'

const useResize = (callback: Function, immediatelyInvoke: boolean = true): void =>
	useEvent('resize', callback, { immediatelyInvoke })

export { useResize }
