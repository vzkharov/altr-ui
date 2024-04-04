import React from 'react'

import type { IconProps } from '../helpers/icon'

const ExpandIcon: React.FC<IconProps> = ({ size, color, ...props }) => (
	<div {...props}>
		<svg
			strokeWidth="0"
			viewBox="0 0 24 24"
			fill={color || 'currentColor'}
			stroke={color || 'currentColor'}
			width={size ? `${size}px` : '1em'}
			height={size ? `${size}px` : '1em'}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="m12 19.24-4.95-4.95-1.41 1.42L12 22.07l6.36-6.36-1.41-1.42L12 19.24zM5.64 8.29l1.41 1.42L12 4.76l4.95 4.95 1.41-1.42L12 1.93 5.64 8.29z"></path>
		</svg>
	</div>
)

export { ExpandIcon }
