import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, type AvatarProps } from '@altrui/react'

import { DEFAULT_CONTROLS } from '../utils'

enum AvatarType {
	Null = 'Null',
	Text = 'Text',
	Image = 'Image',
}

type ExtendedAvatarProps = AvatarProps & {
	type?: AvatarType
}

export default {
	id: 'Avatar',
	title: 'Avatar',
	component: Avatar,
	args: {
		size: 60,
	},
	argTypes: {
		color: DEFAULT_CONTROLS.color,
		type: {
			control: { type: 'radio' },
			options: [AvatarType.Null, AvatarType.Text, AvatarType.Image],
		},
	},
	render: ({ type, ...args }) => {
		switch (type) {
			case AvatarType.Null:
				return <Avatar {...args} />
			case AvatarType.Text:
				return (
					<Avatar
						{...args}
						text="Avatar"
					/>
				)
			case AvatarType.Image:
				return (
					<Avatar
						{...args}
						src="https://news.store.rambler.ru/img/9d71392b19be9be237a51bd65fe20a55"
					/>
				)

			default:
				return <Avatar {...args} />
		}
	},
} as Meta<ExtendedAvatarProps>

type Story = StoryObj<ExtendedAvatarProps>

export const Type: Story = {
	args: { type: AvatarType.Text },
}

export const Color: Story = {
	args: { type: AvatarType.Text, color: 'foreground' },
}

export const Empty: Story = {
	args: {},
}

export const Loading: Story = {
	args: { loading: true },
}

export const Rounded: Story = {
	args: { rounded: true },
}

export const Bordered: Story = {
	args: {
		color: 'info',
		bordered: true,
	},
}

export const Uploaded: Story = {
	args: {
		uploaded: true,
		onUpload: console.log,
	},
}

export const Disabled: Story = {
	args: {
		color: 'info',
		disabled: true,
		bordered: true,
	},
}
