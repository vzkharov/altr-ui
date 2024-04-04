import type { Meta, StoryObj } from '@storybook/react'
import {
	RadioDot,
	RadioColor,
	RadioGroup,
	type RadioDotProps,
	type RadioGroupProps,
	type RadioColorProps,
	type RadioOptionProps,
} from '@altrui/react'

import { random } from '../helpers/array'
import { DEFAULT_CONTROLS } from '../utils'

enum RadioOptionType {
	'Dots' = 'Dots',
	'Colors' = 'Colors',
}

type ExtendedRadioProps<P = RadioOptionProps> = Partial<P> & {
	type?: RadioOptionType
	disabledKeys?: string[]
}

const values = ['Cola', 'Fanta', 'Pepsi', 'Dr. Pepper', 'Sprite']
const colors = ['#0072F5', '#F31260', '#F5A524', '#17C964', '#929292']

const Dots = ({ disabled, disabledKeys, ...args }: ExtendedRadioProps<RadioDotProps>) => (
	<>
		{values.map((dot) => (
			<RadioDot
				{...args}
				key={dot}
				value={dot}
				disabled={disabled || disabledKeys?.includes(dot)}
			/>
		))}
	</>
)

const Colors = ({ disabled, disabledKeys, ...args }: ExtendedRadioProps<RadioColorProps>) => (
	<>
		{colors.map((color) => (
			<RadioColor
				{...args}
				key={color}
				value={color}
				disabled={disabled || disabledKeys?.includes(color)}
			/>
		))}
	</>
)

export default {
	id: 'Radio',
	title: 'Radio',
	component: RadioGroup,
	argTypes: {
		type: {
			control: { type: 'radio' },
			options: [RadioOptionType.Dots, RadioOptionType.Colors],
		},
		size: DEFAULT_CONTROLS.size,
		color: DEFAULT_CONTROLS.color,
	},
	render: ({ type, disabledKeys, disabled, ...args }) => {
		switch (type) {
			case RadioOptionType.Dots:
				return (
					<RadioGroup
						label="Dots"
						initialValue={random(values)}
						{...args}
					>
						<Dots disabledKeys={disabledKeys} />
					</RadioGroup>
				)
			case RadioOptionType.Colors:
				return (
					<RadioGroup
						label="Colors"
						initialValue={random(colors)}
						{...args}
					>
						<Colors disabledKeys={disabledKeys} />
					</RadioGroup>
				)
			default:
				return (
					<RadioGroup
						label="Dots"
						initialValue={random(values)}
						{...args}
					>
						<Dots disabledKeys={disabledKeys} />
					</RadioGroup>
				)
		}
	},
} as Meta<ExtendedRadioProps<RadioGroupProps>>

type StoryGroup = StoryObj<ExtendedRadioProps<RadioGroupProps>>

export const Type: StoryGroup = {}

export const Size: StoryGroup = {}

export const ReadOnly: StoryGroup = {
	args: { readOnly: true },
}

export const Disabled: StoryGroup = {
	args: { disabledKeys: [random(values), random(values)] },
}

export const Required: StoryGroup = {
	args: {
		required: true,
		label: 'Options',
		hint: 'Choose one of option below',
	},
}

export const WithContent: StoryGroup = {
	args: {
		dir: 'y',
		label: 'Options',
		hint: 'Choose one of option below',
	},
}
