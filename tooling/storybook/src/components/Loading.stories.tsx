import type { Meta, StoryObj } from '@storybook/react'
import { Loading, LoadingDots, LoadingCircle, type LoadingProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

enum LoadingType {
	Dots = 'Dots',
	Circle = 'Circle',
}

type StorybookLoadingProps = LoadingProps & {
	type: LoadingType
}

export default {
	id: 'Loading',
	title: 'Loading',
	component: Loading,
	args: {
		size: 32,
	},
	argTypes: {
		color: DEFAULT_CONTROLS.color,
		type: {
			options: [LoadingType.Circle, LoadingType.Dots],
			control: { type: 'radio' },
		},
	},
	render: ({ type, ...args }) => {
		switch (type) {
			case LoadingType.Dots:
				return <LoadingDots {...args} />
			case LoadingType.Circle:
				return <LoadingCircle {...args} />
			default:
				return <LoadingCircle {...args} />
		}
	},
} as Meta<StorybookLoadingProps>

type Story = StoryObj<StorybookLoadingProps>

export const Type: Story = {}

export const Size: Story = {
	args: { size: 48 },
}

export const Color: Story = {
	args: { color: 'info' },
}
