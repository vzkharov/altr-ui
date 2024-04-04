import type { IconProps } from '../helpers/icon'

const UserIcon = ({ size, color, ...props }: IconProps) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill={color || 'currentColor'}
		width={size ? `${size}px` : '1em'}
		height={size ? `${size}px` : '1em'}
	>
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
		<circle
			cx="12"
			cy="7"
			r="4"
		/>
	</svg>
)

export { UserIcon }
