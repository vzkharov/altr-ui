import type { Meta, StoryObj } from '@storybook/react'
import { Switch, type SwitchProps } from '@altrui/react'

import { Icon } from '../helpers/Icon'
import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Switch',
	title: 'Switch',
	component: Switch,
	args: { initialValue: true },
	argTypes: {
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,

		icon: { control: { type: null } },
		contentLeft: { control: { type: null } },
		contentRight: { control: { type: null } },
	},
} as Meta<SwitchProps>

type Story = StoryObj<SwitchProps>

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
		icon: (
			<Icon
				solid
				name="Moon"
			/>
		),
	},
}

export const WithContent: Story = {
	args: {
		contentLeft: (
			<Icon
				solid
				name="SunMoon"
			/>
		),
		contentRight: (
			<Icon
				solid
				name="Moon"
			/>
		),
	},
}

export const WithLabels: Story = {
	args: {
		label: 'Theme',
		description: 'Click to toggle theme',
		contentLeft: (
			<Icon
				solid
				name="SunMoon"
			/>
		),
		contentRight: (
			<Icon
				solid
				name="Moon"
			/>
		),
	},
}
