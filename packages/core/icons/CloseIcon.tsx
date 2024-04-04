import type { IconProps } from '../helpers/icon'

const CloseIcon = ({ size, color, ...props }: IconProps) => (
	<div {...props}>
		<svg
			viewBox="0 0 12 12"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke={color || 'currentColor'}
			width={size ? `${size}px` : '1em'}
			height={size ? `${size}px` : '1em'}
		>
			<line
				x1="2"
				y1="10"
				x2="10"
				y2="2"
				strokeWidth="1"
			/>
			<line
				x1="2"
				y1="2"
				x2="10"
				y2="10"
				strokeWidth="1"
			/>
		</svg>
	</div>
)

export { CloseIcon }
