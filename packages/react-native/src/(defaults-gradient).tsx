import { memo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import MaskedView from '@react-native-community/masked-view'

import { useTheme } from './theme'
import { Text, ViewProps, type TextProps } from './(defaults)'

type GradientTextProps = TextProps & {
	colors?: string[]
}

const GradientText = memo(({ style, colors, ...rest }: GradientTextProps) => {
	const { colors: themeColors } = useTheme()

	const gradientColors =
		colors && colors.length
			? colors
			: [themeColors.gradient.start, themeColors.gradient.start, themeColors.gradient.end]

	return (
		// @ts-expect-error
		<MaskedView
			maskElement={
				<Text
					{...rest}
					style={style}
				/>
			}
		>
			<LinearGradient
				end={{ x: 1, y: 0 }}
				start={{ x: 0, y: 0 }}
				colors={gradientColors}
			>
				<Text
					{...rest}
					style={[style, { opacity: 0 }]}
				/>
			</LinearGradient>
		</MaskedView>
	)
})

type GradientViewProps = ViewProps & {
	colors?: string[]
}

const GradientView = memo(({ style, colors, children, ...rest }: GradientViewProps) => {
	const { colors: themeColors } = useTheme()

	const gradientColors =
		colors && colors.length
			? colors
			: [themeColors.gradient.start, themeColors.gradient.start, themeColors.gradient.end]

	return (
		<LinearGradient
			{...rest}
			style={style}
			end={{ x: 1, y: 0 }}
			start={{ x: 0, y: 0 }}
			colors={gradientColors}
		>
			{children}
		</LinearGradient>
	)
})

export { GradientText, GradientView }
export type { GradientTextProps, GradientViewProps }
