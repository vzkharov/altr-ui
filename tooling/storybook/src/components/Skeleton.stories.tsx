import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, type SkeletonProps } from '@altrui/react'

export default {
	id: 'Skeleton',
	title: 'Skeleton',
	component: Skeleton,
	args: {},
	render: (args) => (
		<div className="flex items-center space-x-4">
			<Skeleton
				{...args}
				className="w-12 h-12 rounded-full"
			/>
			<div className="space-y-2">
				<Skeleton
					{...args}
					className="w-64 h-4"
				/>
				<Skeleton
					{...args}
					className="w-48 h-4"
				/>
			</div>
		</div>
	),
} as Meta<SkeletonProps>

type Story = StoryObj<SkeletonProps>

export const Default: Story = {}

export const DisableAnimation: Story = {
	args: { disableAnimation: true },
}
