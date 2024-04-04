import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
	Alert,
	Button,
	AlertTitle,
	AlertDescription,
	AlertActions,
	type AlertProps,
} from '@altrui/react'

import { Icon } from '../helpers/Icon'
import { capitalize } from '../helpers/string'

import { DEFAULT_CONTROLS } from '../utils'

type AlertColor = NonNullable<AlertProps['color']>

export default {
	id: 'Alert',
	title: 'Alert',
	component: Alert,
	argTypes: {
		color: DEFAULT_CONTROLS.color,
	},
	render: ({ children, color = 'default', ...args }) => {
		const [open, setOpen] = React.useState<boolean>(false)
		const content = ALERT_CONTENT_BY_COLOR[color]

		return (
			<>
				<Button
					color={color}
					variant="shadow"
					onClick={() => setOpen(true)}
				>
					{color ? capitalize(color) : 'Open'}
				</Button>

				<Alert
					{...args}
					open={open}
					color={color}
					onChange={setOpen}
					icon={
						<Icon
							size={80}
							name="AlertTriangle"
						/>
					}
				>
					<AlertTitle>{content.title}</AlertTitle>
					<AlertDescription>{content.description}</AlertDescription>
					<AlertActions>
						<Button
							color={color}
							variant="shadow"
							onClick={() => setOpen(false)}
						>
							Ok
						</Button>
					</AlertActions>
				</Alert>
			</>
		)
	},
} as Meta<AlertProps>

type Story = StoryObj<AlertProps>

export const Default: Story = {}

export const Color: Story = {
	args: { color: 'info' },
}

export const PreventClose: Story = {
	args: { color: 'info', preventClose: true },
}

const ALERT_CONTENT_BY_COLOR: Record<AlertColor, { title: string; description: string }> = {
	default: {
		title: 'Title information',
		description: 'Some additional description',
	},

	info: {
		title: 'Info',
		description: 'Any action was happened!',
	},
	warning: {
		title: 'Warning',
		description: 'Some warning message!',
	},
	error: {
		title: 'Error',
		description: 'Any action cause error!',
	},
	success: {
		title: 'Success',
		description: 'Any action was successed!',
	},
}
