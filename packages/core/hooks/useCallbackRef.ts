import { useRef, useEffect, useCallback } from 'react'

const useCallbackRef = <T extends (...args: any[]) => any>(
	callback: T | undefined,
	deps: React.DependencyList = [],
) => {
	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	})

	return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps)
}

export { useCallbackRef }
