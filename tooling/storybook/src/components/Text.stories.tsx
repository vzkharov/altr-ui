import type { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Text',
	title: 'Text',
	component: Text,
	args: {
		size: 36,
		weight: 600,
		children: 'Text',
	},
	argTypes: {
		color: {
			...DEFAULT_CONTROLS.color,
			options: [...DEFAULT_CONTROLS.color.options, 'ghost'],
		},
	},
} as Meta<TextProps>

type Story = StoryObj<TextProps>

export const Default: Story = {}

export const Color: Story = {
	args: { color: 'ghost' },
}

export const Gradient: Story = {
	args: { gradient: true },
}

export const Disabled: Story = {
	args: { disabled: true },
}

const truncatedText =
	'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy' +
	'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
	'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' +
	'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently' +
	'with desktop publishing software like Aldus PageMaker including versions of Lorem'

export const Truncated: Story = {
	render: (args) => (
		<div className="w-screen h-screen flex flex-center">
			<div className="w-96">
				<Text
					{...args}
					size={14}
					weight={400}
					children={truncatedText}
				/>
			</div>
		</div>
	),
	args: {
		size: 14,
		weight: 400,
		lineClamp: 3,
	},
	argTypes: {
		lineClamp: {
			options: [1, 2, 3, 4, 5],
			control: { type: 'select' },
		},
	},
}
