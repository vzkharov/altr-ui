import type { Meta, StoryObj } from '@storybook/react'
import { Image, type ImageProps } from '@altrui/react'

export default {
	id: 'Image',
	title: 'Image',
	component: Image,
	args: {
		rounded: 0,
	},
	render: (args) => (
		<Image
			{...args}
			objectFit="cover"
			rootClassName="w-32 h-32"
			src="https://news.store.rambler.ru/img/9d71392b19be9be237a51bd65fe20a55"
		/>
	),
} as Meta<ImageProps>

type Story = StoryObj<ImageProps>

export const Default: Story = {}

export const Rounded = {
	args: { rounded: 15 },
}

export const Preview = {
	args: { preview: true },
}
