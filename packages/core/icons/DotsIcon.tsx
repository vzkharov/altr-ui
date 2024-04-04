import React from 'react'

import type { IconProps } from '../helpers/icon'

const DotsIcon: React.FC<IconProps> = ({ size, color, ...props }) => (
	<svg
		viewBox="0 0 26 24"
		xmlns="http://www.w3.org/2000/svg"
		fill={color || 'currentColor'}
		stroke={color || 'currentColor'}
		width={size ? `${size}px` : '1.25rem'}
		height={size ? `${size}px` : '1.25rem'}
		{...props}
	>
		<circle
			cx="4"
			cy="12"
			r="1.5px"
			className="animate-[dotScale_750ms_infinite]"
		/>
		<circle
			cx="13"
			cy="12"
			r="1.5px"
			className="animate-[dotScale_750ms_infinite_300ms]"
		/>
		<circle
			cx="22"
			cy="12"
			r="1.5px"
			className="animate-[dotScale_750ms_infinite]"
		/>
	</svg>
)

export { DotsIcon }
