import type { IconProps } from '../helpers/icon'

type CheckIconProps = IconProps &
	Partial<{
		checked: boolean
		animated: boolean

		strokeWidth: string | number
	}>

const CheckIcon = ({
	size,
	color,
	strokeWidth = 2,
	checked = false,
	animated = true,
	...props
}: CheckIconProps) => (
	<svg
		role="presentation"
		viewBox="0 0 17 18"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? `${size}px` : '1em'}
		height={size ? `${size}px` : '1em'}
		{...props}
	>
		<polyline
			fill="none"
			points="1 9 7 14 15 4"
			strokeWidth={strokeWidth}
			strokeDasharray={22}
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke={color || 'currentColor'}
			strokeDashoffset={checked ? 44 : 66}
			style={
				animated && checked
					? {
							transition: 'stroke-dashoffset 250ms linear 0.2s',
					  }
					: {}
			}
		/>
	</svg>
)

const IndeterminateIcon = ({ size, color, checked, ...props }: CheckIconProps) => (
	<svg
		stroke="currentColor"
		strokeWidth={3}
		viewBox="0 0 24 24"
		{...props}
	>
		<line
			x1="21"
			x2="3"
			y1="12"
			y2="12"
		/>
	</svg>
)

export { CheckIcon, IndeterminateIcon }
