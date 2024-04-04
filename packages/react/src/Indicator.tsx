import { memo } from 'react'

import { clsx } from '@altrui/core/utils/clsx'
import type { MergeWithHTMLProps } from '@altrui/core/utils/types'

type IndicatorProps = MergeWithHTMLProps<
	'div',
	{
		color?: string

		size?: string | number
		disabled?: boolean
	}
>

const Indicator = memo(
	({ color, className, size = 18, disabled = false, ...props }: IndicatorProps) => {
		const newColor = disabled || !color ? 'currentColor' : color

		return (
			<div
				{...props}
				className={clsx(
					'select-none',
					disabled ? 'text-muted' : 'text-default',
					className,
				)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					stroke={newColor}
					width={size ? `${size}px` : '1em'}
					height={size ? `${size}px` : '1em'}
				>
					<circle
						r="10"
						cx="12"
						cy="12"
					/>
					{!disabled ? (
						<circle
							r="4"
							cx="12"
							cy="12"
							fill={newColor}
						/>
					) : null}
				</svg>
			</div>
		)
	},
)

export { Indicator }
export type { IndicatorProps }
