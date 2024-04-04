import type { Meta, StoryObj } from '@storybook/react'
import { Text, Collapse, Indicator, type CollapseProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Collapse',
	title: 'Collapse',
	component: Collapse,
	argTypes: {
		color: DEFAULT_CONTROLS.color,
		variant: DEFAULT_CONTROLS.variant,

		contentLeft: { control: { type: null } },
		contentRight: { control: { type: null } },
	},
	render: (args) => (
		<Collapse
			{...args}
			className="w-[400px]"
			title="What is your refund policy?"
			description="More description about Option"
		>
			<ul className="list-disc px-4">
				<Text as="li">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Text
					as="li"
					className="mt-3"
				>
					Ut labore et dolore magna aliqua.
				</Text>
			</ul>
		</Collapse>
	),
} as Meta<CollapseProps>

type Story = StoryObj<CollapseProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'shadow' },
}

export const Color: Story = {
	args: { color: 'info' },
}

export const Disabled: Story = {
	args: { disabled: true },
}

export const WithContent: Story = {
	args: {
		variant: 'shadow',
		contentRight: (
			<Text
				size={18}
				weight={700}
				className="text-gradient-vr"
			>
				2
			</Text>
		),
		contentLeft: (
			<Indicator
				size={16}
				color="#fd6162"
			/>
		),
	},
}
