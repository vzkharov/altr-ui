import type { Meta } from '@storybook/react'

const ALIGNS = ['center', 'start', 'end'] as const
const POSITIONS = ['right', 'bottom', 'top', 'left'] as const

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const STATUSES = ['info', 'error', 'success', 'warning'] as const
const VARIANTS = ['solid', 'outlined', 'shadow', 'light'] as const

const COLORS = ['default', 'foreground', 'info', 'error', 'success', 'warning'] as const

type Align = (typeof ALIGNS)[number]
type Position = (typeof POSITIONS)[number]

type Size = (typeof SIZES)[number]
type Color = (typeof COLORS)[number]
type Status = (typeof STATUSES)[number]
type Variant = (typeof VARIANTS)[number]

const DEFAULT_CONTROLS = {
	size: {
		options: [...SIZES],
		control: { type: 'select' },
	},
	align: {
		options: [...ALIGNS],
		control: { type: 'select' },
	},
	color: {
		options: [...COLORS],
		control: { type: 'select' },
	},
	variant: {
		options: [...VARIANTS],
		control: { type: 'select' },
	},
	position: {
		options: [...POSITIONS],
		control: { type: 'select' },
	},

	status: {
		control: { type: 'select' },
		options: [...STATUSES, '-- none --'],
	},
} satisfies Meta['argTypes']

export { DEFAULT_CONTROLS }
export { SIZES, ALIGNS, COLORS, VARIANTS, STATUSES, POSITIONS }
export type { Size, Align, Color, Status, Variant, Position }
