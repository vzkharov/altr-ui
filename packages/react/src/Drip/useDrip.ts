'use client'

import { useState, type MouseEvent, type MutableRefObject } from 'react'

type UseDripProps = {
	ref: MutableRefObject<HTMLElement | null> | null

	initialValue?: boolean | null
}

const useDrip = ({ ref, initialValue = false }: UseDripProps) => {
	const [dripVisible, setDripVisible] = useState<boolean>(initialValue || false)

	const [dripX, setDripX] = useState<number>(0)
	const [dripY, setDripY] = useState<number>(0)

	const dripCompletedHandle = () => {
		setDripVisible(false)
		setDripX(0)
		setDripY(0)
	}

	const clickHandler = (event: MouseEvent<HTMLElement>) => {
		if (!ref || !ref.current) {
			return null
		}

		const rect = ref.current.getBoundingClientRect()

		setDripVisible(true)

		setDripX(event.clientX - rect.left)
		setDripY(event.clientY - rect.top)
	}

	return {
		visible: dripVisible,
		x: dripX,
		y: dripY,
		onClick: clickHandler,
		onCompleted: dripCompletedHandle,
	}
}

type UseDripReturn = ReturnType<typeof useDrip>

export { useDrip }
export type { UseDripProps, UseDripReturn }
