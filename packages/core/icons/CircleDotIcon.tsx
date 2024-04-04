import type { IconProps } from '../helpers/icon'

const CircleDotIcon = ({ size, color, ...props }: IconProps) => (
	<div {...props}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke={color || 'currentColor'}
			width={size ? `${size}px` : '1em'}
			height={size ? `${size}px` : '1em'}
		>
			<circle
				r="10"
				cx="12"
				cy="12"
			/>
			<circle
				r="4"
				cx="12"
				cy="12"
				fill={color || 'currentColor'}
			/>
		</svg>
	</div>
)

export { CircleDotIcon }
