import type { ShapeType } from '../useRealShape'

import type { Align, Position } from './types'

type ContentShape = {
	width: number
	height: number
}

type PlacementPropsCSS = {
	top: string | number
	left: string | number
	right: string | number
	bottom: string | number
}

const getAligns = (
	{
		content,
		trigger,
	}: {
		trigger: ShapeType
		content: ContentShape
	},
	dir: 'x' | 'y'
): Record<Align, Partial<PlacementPropsCSS>> =>
	({
		x: {
			center: {
				top: `calc(${trigger.y}px - ${content.height / 2}px + ${trigger.height / 2}px)`,
			},
			start: {
				top: trigger.y,
			},
			end: {
				top: `calc(${trigger.y}px - ${content.height - trigger.height}px)`,
			},
		},
		y: {
			center: {
				left: `calc(${trigger.x}px - ${content.width / 2}px + ${trigger.width / 2}px)`,
			},
			start: {
				left: trigger.x,
			},
			end: {
				left: `calc(${trigger.x}px - ${content.width - trigger.width}px)`,
			},
		},
	}[dir])

const getPositions = (
	{
		content,
		trigger,
	}: {
		trigger: ShapeType
		content: ContentShape
	},
	offset: number
): Record<Position, Partial<PlacementPropsCSS>> => ({
	top: {
		top: `calc(${trigger.y}px - ${content.height}px - ${offset}px`,
	},
	bottom: {
		top: `calc(${trigger.y}px + ${trigger.height}px + ${offset}px`,
	},
	left: {
		left: `calc(${trigger.x}px - ${content.width}px - ${offset}px)`,
	},
	right: {
		left: `calc(${trigger.x}px + ${trigger.width}px + ${offset}px)`,
	},
})

type GetPositionStyles = (
	rects: {
		trigger: ShapeType
		content: ContentShape
	},
	opts: {
		offset?: number
		align: Align
		position: Position
	}
) => Partial<PlacementPropsCSS>

const getPlacementStyles: GetPositionStyles = (rects, { offset = 0, position, align }) => {
	const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'

	const alignCss = getAligns(rects, dir)[align]
	const positionCss = getPositions(rects, offset)[position]

	return {
		...alignCss,
		...positionCss,
	}
}

export { getPlacementStyles }
export type { GetPositionStyles }
