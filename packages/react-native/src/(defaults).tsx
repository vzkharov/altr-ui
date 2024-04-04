import { memo, forwardRef } from 'react'
import {
	Text as DefaultText,
	SafeAreaView as DefaultView,
	ScrollView as DefaultScrollView,
	type ViewProps,
	type StyleProp,
	type ScrollViewProps,
	type ViewStyle as ViewStyleRN,
	type TextStyle as TextStyleRN,
	type TextProps as DefaultTextProps,
} from 'react-native'
import { tv, type VariantProps } from 'tailwind-variants'

type TextStyle = StyleProp<TextStyleRN>

type TextProps = DefaultTextProps &
	TextVariants & {
		weight?: TextStyleRN['fontWeight']
	}

const Text = memo(
	forwardRef<Text, TextProps>(
		(
			{
				style,
				weight,
				size = 'md',
				align = 'left',
				color = 'default',
				disabled = false,
				...props
			},
			_ref,
		) => (
			<DefaultText
				numberOfLines={1}
				{...props}
				minimumFontScale={1}
				maxFontSizeMultiplier={1}
				style={[{ fontWeight: weight }, style]}
				className={textStyles({ size, align, color, disabled })}
			/>
		),
	),
)

const textStyles = tv({
	base: 'font-medium',
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			'5xl': 'text-5xl',
		},
		color: {
			default: 'text-text-default',
			ghost: 'text-text-ghost',
			info: 'text-tag-blue',
			error: 'text-tag-red',
			success: 'text-tag-green',
			warning: 'text-tag-yellow',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},
		disabled: {
			true: 'text-text-muted',
		},
	},
	defaultVariants: {
		size: 'md',
		align: 'left',
		color: 'default',
		disabled: false,
	},
})

type TextVariants = VariantProps<typeof textStyles>

type ViewStyle = StyleProp<ViewStyleRN>

const View = memo(({ style, ...props }: ViewProps) => (
	<DefaultView
		{...props}
		style={style}
	/>
))

const ScrollView = memo(({ style, ...props }: ScrollViewProps) => (
	<DefaultScrollView
		{...props}
		style={style}
	/>
))

export { Text, View, ScrollView }
export type { TextProps, ViewProps, ViewStyle, ScrollViewProps }
