import { memo, useMemo } from 'react'
import { ActivityIndicator, type ActivityIndicatorProps } from 'react-native'

import { useTheme } from './theme'

type SpinnerVariants = Partial<{
	color: 'default' | 'ghost' | 'info' | 'error' | 'success' | 'warning'
}>
type SpinnerProps = Omit<ActivityIndicatorProps, 'color'> & SpinnerVariants & {}

const Spinner = memo<SpinnerProps>(({ style, color = 'ghost', ...props }) => {
	const styleProps = useSpinnerStyles({ color })

	return (
		<ActivityIndicator
			{...props}
			{...styleProps}
			animating
			style={style}
		/>
	)
})

const useSpinnerStyles = ({ color = 'default' }: SpinnerVariants) => {
	const { colors } = useTheme()
	const utils = useMemo(
		() => ({
			default: colors.text.default,
			ghost: colors.text.ghost,
			info: colors.tag.blue,
			error: colors.tag.red,
			success: colors.tag.green,
			warning: colors.tag.yellow,
		}),
		[colors],
	)

	const styleProps = useMemo(
		() => ({
			color: utils[color],
		}),
		[utils, color],
	)

	return styleProps
}

export { Spinner, useSpinnerStyles }
export type { SpinnerProps, SpinnerVariants }
