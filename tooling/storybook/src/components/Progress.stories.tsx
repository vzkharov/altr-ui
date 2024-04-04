import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Progress, type ProgressProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Progress',
	title: 'Progress',
	component: Progress,
	argTypes: {
		color: DEFAULT_CONTROLS.color,
	},
	render: (args) => {
		const [value, setValue] = React.useState<number>(75)

		const random = () => setValue(Math.random() * 100)

		return (
			<div className="w-64 flex flex-col items-center gap-y-6">
				<Progress
					{...args}
					value={value}
				/>
				<Button
					size="sm"
					onClick={random}
					variant="shadow"
					color={args.color}
					gradient={args.color === 'default' || args.animated}
				>
					Randomize
				</Button>
			</div>
		)
	},
} as Meta<ProgressProps>

type Story = StoryObj<ProgressProps>

export const Default: Story = {}

export const Color: Story = {
	args: { color: 'foreground' },
}

export const Animated: Story = {
	args: { animated: true },
}
