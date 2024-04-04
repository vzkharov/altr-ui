import type { Meta, StoryObj } from '@storybook/react'
import { Input, type InputProps } from '@altrui/react'

import { Icon } from '../helpers/Icon'
import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Input',
	title: 'Input',
	component: Input,
	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outlined'] satisfies InputProps['variant'][],
		},
		iconLeft: { control: { type: null } },
		iconRight: { control: { type: null } },
	},
	render: (args) => (
		<div className="w-[500px] flex flex-center">
			<Input
				{...args}
				placeholder="Placeholder..."
			/>
		</div>
	),
} as Meta<InputProps>

type Story = StoryObj<InputProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'outlined' },
}

export const Size: Story = {
	args: { size: 'lg' },
}

export const Color: Story = {
	args: { color: 'info' },
}

export const Full: Story = {
	args: { full: true },
}

export const Loading: Story = {
	args: { color: 'info', loading: true },
}

export const ReadOnly: Story = {
	args: { color: 'info', readOnly: true },
}

export const Disabled: Story = {
	args: { color: 'info', disabled: true },
}

export const Clearable: Story = {
	args: { color: 'info', clearable: true, initialValue: 'Text' },
}

export const WithContent: Story = {
	args: {
		color: 'info',
		label: 'Label',
		clearable: true,
		initialValue: 'Text',
		hint: 'Added hint to input',
		iconLeft: <Icon name="Search" />,
	},
}

export const WithErrorContent: Story = {
	args: {
		error: true,
		label: 'Label',
		clearable: true,
		initialValue: 'Text',
		hint: 'Added hint to input',
		iconLeft: <Icon name="Search" />,
	},
}
