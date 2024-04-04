import type { Meta, StoryObj } from '@storybook/react'
import { Tab, Tabs, type TabProps, type TabsProps } from '@altrui/react'

import { random } from '../helpers/array'
import { DEFAULT_CONTROLS } from '../utils'

const values: string[] = ['Mirinda', 'Fanta', 'Pepsi', 'Dr. Pepper']

type TabItemsProps = Partial<TabProps> & {
	disabledKeys?: string[]
}

const TabItems = ({ disabled, disabledKeys, ...props }: TabItemsProps) => (
	<>
		{values.map((value) => (
			<Tab
				key={value}
				id={value}
				name={value}
				disabled={disabled || disabledKeys?.includes(value)}
				{...props}
			/>
		))}
	</>
)

export default {
	id: 'Tabs',
	title: 'Tabs',
	component: Tabs,
	args: {
		variant: 'solid',
		children: <TabItems />,
	},
	argTypes: {
		dir: {
			options: ['x', 'y'],
			control: { type: 'radio' },
		},
		children: {
			control: { type: 'default' },
		},
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
		variant: DEFAULT_CONTROLS.variant,
	},
	render: ({ children, ...args }) => {
		const name = random(values)
		return (
			<Tabs
				{...args}
				className="min-w-[250px]"
				initialItem={{ id: name, name }}
			>
				{children}
			</Tabs>
		)
	},
} as Meta<TabsProps>

type StoryGroup = StoryObj<TabsProps>

export const Default: StoryGroup = {}

export const Variant: StoryGroup = {
	args: { variant: 'light' },
}

export const Size: StoryGroup = {
	args: { size: 'lg' },
}

export const Color: StoryGroup = {
	args: { color: 'info' },
}

export const Direction: StoryGroup = {
	args: { dir: 'y' },
}

export const ReadOnly: StoryGroup = {
	args: { readOnly: true },
}

export const Underlined: StoryGroup = {
	args: { color: 'info', underlined: true },
}

export const Disabled: StoryGroup = {
	args: {
		children: <TabItems disabledKeys={[random(values), random(values)]} />,
	},
}
