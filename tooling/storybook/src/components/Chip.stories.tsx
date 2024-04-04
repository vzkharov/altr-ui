import type { Meta, StoryObj } from '@storybook/react'
import { Chip, type ChipProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Chip',
	title: 'Chip',
	component: Chip,
	args: {
		value: 'Cola',
		removeable: false,
	},
	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
		variant: DEFAULT_CONTROLS.variant,
	},
} as Meta<ChipProps>

type Story = StoryObj<ChipProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'shadow' },
}

export const Size: Story = {
	args: { size: 'lg' },
}

export const Color: Story = {
	args: { color: 'info' },
}

export const Disabled: Story = {
	args: { disabled: true },
}

export const Gradient: Story = {
	args: { gradient: true },
}

export const Removeable: Story = {
	args: { variant: 'shadow', color: 'info', removeable: true },
}
