import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, type TooltipProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Tooltip',
	title: 'Tooltip',
	component: Tooltip,
	args: {
		align: 'center',
		position: 'top',
		content: 'Tooltip Text',
	},
	argTypes: {
		align: DEFAULT_CONTROLS.align,
		variant: DEFAULT_CONTROLS.variant,
		position: DEFAULT_CONTROLS.position,
		color: {
			control: DEFAULT_CONTROLS.color.control,
			options: [...DEFAULT_CONTROLS.color.options, 'foreground'],
		},
	},
	render: (args) => (
		<Tooltip {...args}>
			<div className="px-6 py-2 flex flex-center rounded-md bg-content-ghost text-ghost select-none">
				Hover
			</div>
		</Tooltip>
	),
} as Meta<TooltipProps>

type Story = StoryObj<TooltipProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'outlined' },
}

export const Color: Story = {
	args: { color: 'info' },
}

export const Placement: Story = {
	args: {
		align: 'center',
		position: 'bottom',
	},
}

export const Delay: Story = {
	args: {
		enterDelay: 300,
		leaveDelay: 300,
	},
}
