import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, type CheckboxProps } from '@altrui/react'

import { Icon } from '../helpers/Icon'
import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Checkbox',
	title: 'Checkbox',
	component: Checkbox,
	args: { initialValue: true },
	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,

		icon: { control: { type: null } },
	},
} as Meta<CheckboxProps>

type Story = StoryObj<CheckboxProps>

export const Default: Story = {}

export const Size: Story = {
	args: { size: 'lg' },
}

export const Color: Story = {
	args: { color: 'foreground' },
}

export const ReadOnly: Story = {
	args: { readOnly: true },
}

export const Disabled: Story = {
	args: { disabled: true },
}

export const WithIcon: Story = {
	args: {
		color: 'error',
		icon: (
			<Icon
				solid
				name="Heart"
			/>
		),
		label: 'Press Like',
	},
}

export const WithLabels: Story = {
	args: {
		label: 'Dark Theme',
		description: 'Click to apply',
		icon: (
			<Icon
				solid
				name="Moon"
			/>
		),
	},
}
