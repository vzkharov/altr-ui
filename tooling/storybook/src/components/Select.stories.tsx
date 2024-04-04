import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectItem, type SelectProps, type SelectItemProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

const suggestions: SelectItemProps[] = [
	{ id: '2', name: 'Pepsi' },
	{ id: '1', name: 'Coca-Cola', disabled: true },
	{ id: '4', name: 'Fanta', description: 'This is one of the select item' },
	{ id: '3', name: 'Mirinda' },
	{ id: '5', name: 'Dr. Pepper', disabled: true },
]

export default {
	id: 'Select',
	title: 'Select',
	component: Select,
	args: {
		initialItem: suggestions[1],
	},
	argTypes: {
		variant: {
			...DEFAULT_CONTROLS.variant,
			options: ['solid', 'outlined'] satisfies SelectProps['variant'][],
		},
		color: DEFAULT_CONTROLS.color,
	},
	render: (args) => (
		<Select
			{...args}
			className="w-96"
		>
			{suggestions.map((suggest) => (
				<SelectItem
					key={suggest.id}
					{...suggest}
				/>
			))}
		</Select>
	),
} as Meta<SelectProps>

type Story = StoryObj<SelectProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'outlined' },
}

export const Empty: Story = {
	args: { empty: true, initialItem: undefined },
}

export const Loading: Story = {
	args: { loading: true },
}

export const Searchable: Story = {
	args: { searchable: true },
}
