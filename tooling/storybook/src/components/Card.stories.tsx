import type { Meta, StoryObj } from '@storybook/react'
import {
	Card,
	Input,
	Spacer,
	Button,
	CardBody,
	CardTitle,
	CardFooter,
	CardHeader,
	CardDescription,
	type CardProps,
} from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

export default {
	id: 'Card',
	title: 'Card',
	component: Card,
	argTypes: {
		color: DEFAULT_CONTROLS.color,
		variant: {
			...DEFAULT_CONTROLS.variant,
			options: DEFAULT_CONTROLS.variant.options.filter(
				(variant) => variant !== 'light',
			),
		},
	},
	render: ({ children, color = 'default', variant = 'solid', ...args }: CardProps) => (
		<Card
			{...args}
			color={color}
			variant={variant}
			className="w-[600px]"
		>
			<CardHeader>
				<CardTitle>Card example</CardTitle>
				<CardDescription>Send notifications to device.</CardDescription>
			</CardHeader>
			<CardBody>
				<Input
					full
					label="Email"
					color={color}
					variant={variant}
					hint="Type valid email"
				/>
				<Spacer y={10} />
				<Input
					full
					color={color}
					label="Password"
					variant={variant}
				/>
			</CardBody>
			<CardFooter className="flex justify-between">
				<Button gradient>Sign In</Button>
			</CardFooter>
		</Card>
	),
} as Meta<CardProps>

type Story = StoryObj<CardProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'outlined' },
}

export const Color: Story = {
	args: { color: 'info' },
}
