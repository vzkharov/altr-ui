import { useState, useEffect } from 'react'

type UsePortal = (id: string, getContainer?: () => Element | null | undefined) => Element

const usePortal: UsePortal = (id, getContainer) => {
	const [elSnapshot, setElSnapshot] = useState<Element>(createElement(id))

	useEffect(() => {
		const customContainer = getContainer ? getContainer() : null
		const parentElement = customContainer || document.body
		const hasElement = parentElement?.querySelector<Element>(`#${id}`)
		const el = hasElement || createElement(id)

		if (!hasElement) {
			parentElement.appendChild(el)
		}
		setElSnapshot(el)
	}, [])

	return elSnapshot
}

const createElement = (id: string): Element => {
	const el = document.createElement('div')
	el.setAttribute('id', id)
	return el
}

export { usePortal }
