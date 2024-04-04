import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, type TextAreaProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'TextArea',
	title: 'TextArea',
	component: TextArea,

	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
		status: DEFAULT_CONTROLS.status,
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outlined'] satisfies TextAreaProps['variant'][],
		},
	},
	render: (args) => (
		<div className="w-[500px] flex flex-center">
			<TextArea
				{...args}
				rows={6}
				label="Description"
				className="min-w-[400px]"
				placeholder="Type here..."
			/>
		</div>
	),
} as Meta<TextAreaProps>

type Story = StoryObj<TextAreaProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'outlined' },
}

export const Size: Story = {
	args: { size: 'sm' },
}

export const Color: Story = {
	args: { color: 'info' },
}

export const Full: Story = {
	args: {
		full: true,
		color: 'info',
		hint: 'Width of container is 500px',
	},
}

export const LimitLength: Story = {
	args: {
		minLength: 5,
		maxLength: 15,
		hint: 'Minimum length is 5',
	},
}
