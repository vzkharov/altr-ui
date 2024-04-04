import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../helpers/Icon'
import { DEFAULT_CONTROLS } from '../utils'

import {
	Menu,
	Button,
	MenuItem,
	MenuTrigger,
	MenuContent,
	type MenuProps,
	type MenuItemProps,
} from '@altrui/react'

export default {
	id: 'Menu',
	title: 'Menu',
	component: Menu,
	args: {
		width: 250,
		align: 'start',
		position: 'bottom',
	},
	argTypes: {
		align: DEFAULT_CONTROLS.align,
		position: DEFAULT_CONTROLS.position,
	},
	render: ({ children, ...args }) => (
		<Menu {...args}>
			<MenuTrigger>
				<Button variant="shadow">Click</Button>
			</MenuTrigger>
			<MenuContent>
				{items.map((item, idx) => (
					<MenuItem
						{...item}
						key={idx}
					/>
				))}
			</MenuContent>
		</Menu>
	),
} as Meta<MenuProps>

type Story = StoryObj<MenuProps>

export const Default: Story = {}

export const PreventClose: Story = {
	args: { preventClose: true },
}

const items: MenuItemProps[] = [
	{
		children: 'Report user',
		iconRight: <Icon name="Share2" />,
	},
	{
		color: 'info',
		children: 'User Info',
		iconRight: <Icon name="Info" />,
	},
	{
		color: 'error',
		children: 'Delete user',
		iconRight: <Icon name="Trash2" />,
	},
	{
		color: 'success',
		children: 'Add new user',
		iconRight: <Icon name="PlusCircle" />,
	},
	{
		color: 'warning',
		children: 'Edit user',
		iconRight: <Icon name="ClipboardEdit" />,
	},
]
