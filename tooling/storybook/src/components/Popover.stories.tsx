import type { Meta, StoryObj } from '@storybook/react'
import { Button, Popover, PopoverContent, PopoverTrigger, type PopoverProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Popover',
	title: 'Popover',
	component: Popover,
	args: {
		align: 'end',
		color: 'default',
		position: 'bottom',
	},
	argTypes: {
		align: DEFAULT_CONTROLS.align,
		color: DEFAULT_CONTROLS.color,
		position: DEFAULT_CONTROLS.position,
	},
	render: ({ color, ...args }) => (
		<Popover
			{...args}
			color={color}
		>
			<PopoverTrigger>
				<Button
					color={color}
					variant="shadow"
				>
					Click
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-48 h-24 text-lg font-semibold select-none">
				<div className="w-full h-full flex flex-center">Content</div>
			</PopoverContent>
		</Popover>
	),
} as Meta<PopoverProps>

type Story = StoryObj<Partial<PopoverProps>>

export const Default: Story = {}

export const Color: Story = {
	args: { color: 'info' },
}

export const Full: Story = {
	args: { full: true },
}

export const Placement: Story = {
	args: { align: 'end', position: 'bottom' },
}

export const PreventClose: Story = {
	args: { preventClose: true },
}
