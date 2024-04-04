import React from 'react'

import type { IconProps } from '../helpers/icon'

const PlusIcon: React.FC<IconProps> = ({ size, color, ...props }) => (
	<svg
		viewBox="0 0 15 15"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		stroke={color || 'currentColor'}
		width={size ? `${size}px` : '1.15em'}
		height={size ? `${size}px` : '1.15em'}
		{...props}
	>
		<path
			d="M7.5 13.4375V7.5M7.5 7.5V1.5625M7.5 7.5H13.4375M7.5 7.5H1.5625"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
	</svg>
)

export { PlusIcon }
