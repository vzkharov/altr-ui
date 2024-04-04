import { Text } from '../(defaults)'

import type { ReactChildren } from '../types'

import { Spinner } from '../Spinner'

import { TouchableButton, type TouchableButtonProps } from './TouchableButton'

import { buttonVariants, type ButtonVariants } from './styles'

type ButtonProps = TouchableButtonProps &
	ButtonVariants & {
		gradient?: boolean
		touchable?: boolean

		iconLeft?: ReactChildren
		iconRight?: ReactChildren
	}

const Button = ({
	full,
	style,
	children,
	iconLeft,
	iconRight,
	size = 'md',
	auto = false,
	loading = false,
	disabled = false,
	gradient = false,
	readOnly = false,
	color = 'default',
	variant = 'solid',
	...props
}: ButtonProps) => {
	const touchable = !(disabled || readOnly || loading)
	const { text, button, container } = buttonVariants({
		auto,
		size,
		full,
		color,
		loading,
		variant,
		disabled,
		readOnly,
	})

	return (
		<TouchableButton
			disabled={!touchable}
			opacity={readOnly ? 1 : 0.6}
			{...props}
			style={style}
			className={button()}
			containerClassName={container()}
		>
			{loading ? (
				<Spinner color={color} />
			) : (
				<>
					{iconLeft}

					<Text
						size={size}
						color={color}
						className={text()}
					>
						{children}
					</Text>

					{iconRight}
				</>
			)}
		</TouchableButton>
	)
}

export { Button }
export type { ButtonProps }
