import React from 'react'

import { useRealShape } from '../useRealShape'

import { getPlacementStyles } from './getCss'
import type { Align, Position } from './types'

type PlacementProps = {
	align: Align
	position: Position

	offset?: number
}

type UsePlacementProps<
	C extends HTMLElement = HTMLDivElement,
	T extends HTMLElement = HTMLDivElement,
> = PlacementProps & {
	contentRef: React.MutableRefObject<C | null>
	triggerRef: React.MutableRefObject<T | null>
}

const usePlacement = <
	C extends HTMLElement = HTMLDivElement,
	T extends HTMLElement = HTMLDivElement,
>({
	contentRef,
	triggerRef,
	...positionProps
}: UsePlacementProps<C, T>) => {
	const [rectContent, updateContent] = useRealShape<C>(contentRef)
	const [rectTrigger, updateTrigger] = useRealShape<T>(triggerRef)

	const update = () => {
		updateContent()
		updateTrigger()
	}

	const css = React.useMemo(
		() =>
			getPlacementStyles(
				{
					content: rectContent,
					trigger: rectTrigger,
				},
				positionProps,
			),
		[rectContent, rectTrigger, positionProps],
	)

	return {
		css,
		update,
		rects: {
			content: rectContent,
			trigger: rectTrigger,
		},
	}
}

type UsePlacementReturnType = ReturnType<typeof usePlacement>

export { usePlacement }
export type { PlacementProps, UsePlacementProps, UsePlacementReturnType }
