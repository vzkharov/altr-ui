import { Animated, Pressable } from 'react-native'

import type { TouchableProps } from './types'

type TouchableButtonProps = TouchableProps & {
	scale?: number
	opacity?: number

	delay?: Partial<{
		start: number
		end: number
	}>
}

const TouchableButton = ({
	delay,
	style,
	scale,
	opacity,
	disabled,
	children,
	containerClassName,
	...otherProps
}: TouchableButtonProps) => {
	const scaleAnimated = new Animated.Value(1)
	const opacityAnimated = new Animated.Value(1)

	const start = () => {
		Animated.parallel([
			Animated.spring(scaleAnimated, {
				toValue: scale ?? 1,
				delay: delay?.start ?? 0,
				useNativeDriver: true,
			}),
			Animated.spring(opacityAnimated, {
				toValue: opacity ?? 1,
				delay: delay?.start ?? 0,
				useNativeDriver: true,
			}),
		]).start()
	}

	const end = () => {
		Animated.parallel([
			Animated.spring(scaleAnimated, {
				toValue: 1,
				delay: delay?.end ?? 0,
				useNativeDriver: true,
			}),
			Animated.spring(opacityAnimated, {
				toValue: 1,
				delay: delay?.end ?? 0,
				useNativeDriver: true,
			}),
		]).start()
	}

	return (
		<Pressable
			{...otherProps}
			disabled={disabled}
			onPressIn={start}
			onPressOut={end}
			className={containerClassName}
		>
			<Animated.View
				style={[
					style,
					{ width: 'auto' },
					{ opacity: disabled ? 1 : opacityAnimated },
					{ transform: [{ scale: scaleAnimated }] },
				]}
			>
				{children}
			</Animated.View>
		</Pressable>
	)
}

export { TouchableButton }
export type { TouchableButtonProps }
