import { tv, type VariantProps } from 'tailwind-variants'
import { Keyboard, TextInput, type TextInputProps } from 'react-native'

import { View } from './(defaults)'
import { useTheme } from './theme'

import { Label } from './Label'

import type { ReactChildren } from './types'

type InputProps = TextInputProps &
	InputVariants &
	Partial<{
		label: string
		iconLeft: ReactChildren
		iconRight: ReactChildren
	}>

const Input = ({
	style,
	label,
	iconLeft,
	iconRight,
	size = 'md',
	editable = true,
	variant = 'solid',
	...props
}: InputProps) => {
	const { colors } = useTheme()

	const { input, container } = inputStyles({ size, variant, editable })

	return (
		<>
			{label ? (
				<Label
					size={size}
					weight="600"
				>
					{label}
				</Label>
			) : null}
			<View
				style={style}
				className={container()}
			>
				{iconLeft}
				<TextInput
					{...props}
					editable={editable}
					className={input()}
					textAlignVertical="center"
					onBlur={() => Keyboard.dismiss()}
					onEndEditing={() => Keyboard.dismiss()}
					placeholderTextColor={colors.text.ghost}
				/>
				{iconRight}
			</View>
		</>
	)
}

const inputStyles = tv({
	slots: {
		container: 'flex flex-row items-center',
		input: 'mx-4 flex-1 text-text-default font-medium leading-10',
	},
	variants: {
		variant: {
			solid: { container: 'bg-content3 border-0' },
			outlined: {
				container: 'bg-transparent border-1.5 border-border',
				input: 'active:border-white focus:border-white hover:border-white',
			},
		},
		size: {
			xs: {
				container: 'h-8  rounded-xs',
				input: 'text-sm',
			},
			sm: {
				container: 'h-10 rounded-sm',
				input: 'text-sm',
			},
			md: {
				container: 'h-12 rounded-md ',
				input: 'text-base',
			},
			lg: {
				container: 'h-14 rounded-md ',
				input: 'text-lg',
			},
			xl: {
				container: 'h-16 rounded-lg',
				input: 'text-xl',
			},
		},
		editable: {
			true: {},
			false: { input: 'text-text-ghost' },
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'solid',
	},
})

type InputVariants = VariantProps<typeof inputStyles>

export { Input }
export type { InputProps, InputVariants }
