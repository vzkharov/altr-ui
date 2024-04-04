import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Button',
	title: 'Button',
	component: Button,
	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
		variant: DEFAULT_CONTROLS.variant,
	},
	render: (args) => (
		<div className="w-[500px] flex flex-center">
			<Button
				{...args}
				children="Button"
			/>
		</div>
	),
} as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'shadow' },
}

export const Color: Story = {
	args: { color: 'info' },
}

export const Size: Story = {
	args: { size: 'lg' },
}

export const Full: Story = {
	args: { full: true },
}

export const Auto: Story = {
	args: { auto: true },
}

export const Riple: Story = {
	args: { riple: false },
}

export const Gradient: Story = {
	args: { gradient: true },
}

export const Loading: Story = {
	args: {
		color: 'info',
		loading: true,
		variant: 'solid',
	},
}

export const Disabled: Story = {
	args: {
		color: 'info',
		disabled: true,
		variant: 'solid',
	},
}
