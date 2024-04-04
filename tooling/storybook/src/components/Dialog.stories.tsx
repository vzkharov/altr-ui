import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
	Input,
	Dialog,
	Button,
	DialogBody,
	DialogTitle,
	DialogFooter,
	DialogDescription,
	type DialogProps,
} from '@altrui/react'

import { capitalize } from '../helpers/string'
import { DEFAULT_CONTROLS } from '../utils'

const CustomInput = () => (
	<Input
		full
		label="Name"
		placeholder="Type your name..."
	/>
)

export default {
	id: 'Dialog',
	title: 'Dialog',
	component: Dialog,

	argTypes: {
		position: {
			...DEFAULT_CONTROLS.position,
			options: ['center', ...DEFAULT_CONTROLS.position.options],
		},
		overflow: {
			control: { type: 'select' },
			options: [
				'auto',
				'clip',
				'scroll',
				'hidden',
				'visible',
			] satisfies React.CSSProperties['overflow'][],
		},
	},
	render: ({ overflow, position = 'center', ...args }) => {
		const [isOpen, setIsOpen] = React.useState<boolean>(false)

		const children =
			overflow !== 'scroll' ? (
				<div className="flex flex-col gap-y-4">
					<CustomInput />
					<CustomInput />
				</div>
			) : (
				<div className="grid grid-cols-1 gap-y-4">
					<CustomInput />
					{[...new Array(16)].map((key) => (
						<CustomInput key={key} />
					))}
				</div>
			)

		return (
			<>
				<Button
					color="info"
					variant="shadow"
					onClick={() => setIsOpen(true)}
				>
					{capitalize(position)}
				</Button>
				<Dialog
					{...args}
					open={isOpen}
					overflow={overflow}
					position={position}
					className="min-w-[600px]"
					onChange={() => setIsOpen(false)}
				>
					<DialogTitle>Title</DialogTitle>
					<DialogDescription>Description</DialogDescription>
					<DialogBody>{children}</DialogBody>
					<DialogFooter className="w-full pt-4 flex flex-row gap-x-4 justify-between">
						<Button onClick={() => setIsOpen(false)}>
							Cancel
						</Button>
						<Button
							gradient
							onClick={() => setIsOpen(false)}
						>
							Done
						</Button>
					</DialogFooter>
				</Dialog>
			</>
		)
	},
} as Meta<DialogProps>

type Story = StoryObj<DialogProps>

export const Default: Story = {}

export const Position: Story = {
	args: { position: 'bottom' },
}

export const Scrollable: Story = {
	args: { overflow: 'scroll' },
}

export const PreventClose: Story = {
	args: { preventClose: true },
}
