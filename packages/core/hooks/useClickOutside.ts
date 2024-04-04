import React from 'react'

const useClickOutside = (
	refs: (React.RefObject<Element | null> | undefined)[],
	handler: (event: Event) => void
) => {
	React.useEffect(() => {
		const callback = (event: Event) => {
			const target = (event as any).target

			const isClickedInside = refs.some(
				(ref) => !event || !ref?.current || ref.current.contains(target)
			)

			!isClickedInside && handler(event)
		}

		document.addEventListener('click', callback)

		return () => document.removeEventListener('click', callback)
	}, [refs, handler])
}

export { useClickOutside }
