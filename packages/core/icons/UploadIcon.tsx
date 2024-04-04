import type { IconProps } from '../helpers/icon'

const UploadIcon = ({ size, color, ...props }: IconProps) => (
	<div {...props}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke={color || 'currentColor'}
			width={size ? `${size}px` : '1.25em'}
			height={size ? `${size}px` : '1.25em'}
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="17 8 12 3 7 8" />
			<line
				x1="12"
				x2="12"
				y1="3"
				y2="15"
			/>
		</svg>
	</div>
)

export { UploadIcon }
