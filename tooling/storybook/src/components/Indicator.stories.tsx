import type { Meta, StoryObj } from '@storybook/react'
import { Indicator, type IndicatorProps } from '@altrui/react'

export default {
	id: 'Indicator',
	title: 'Indicator',
	component: Indicator,
	args: {
		size: 18,
	},
	render: (args) => (
		<div className="flex flex-row gap-x-4">
			{['#0072F5', '#F31260', '#F5A524', '#17C964'].map((color) => (
				<Indicator
					{...args}
					key={color}
					color={color}
				/>
			))}
		</div>
	),
} as Meta<IndicatorProps>

type Story = StoryObj<IndicatorProps>

export const Default: Story = {}

export const Size: Story = {
	args: { size: 24 },
}

export const Disabled: Story = {
	args: { disabled: true },
}
