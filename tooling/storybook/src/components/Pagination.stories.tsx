import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, type PaginationProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Pagination',
	title: 'Pagination',
	component: Pagination,
	args: {
		total: 5,
		initialPage: 2,
	},
	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
		variant: DEFAULT_CONTROLS.variant,
	},
} as Meta<PaginationProps>

type Story = StoryObj<PaginationProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'light' },
}

export const Size: Story = {
	args: { size: 'lg' },
}

export const Color: Story = {
	args: { color: 'error' },
}

export const Shadow: Story = {
	args: { shadow: true },
}
