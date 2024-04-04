import { memo, forwardRef } from 'react'

import { cardVariants, type CardVariants } from '@altrui/styles'
import type { As, MergeWithHTMLProps } from '@altrui/core/utils'

type CardProps = MergeWithHTMLProps<
	'article',
	CardVariants & {
		as?: As
	}
>

const Card = memo(
	forwardRef<HTMLElement, CardProps>(
		(
			{
				className,
				as = 'article',
				full = false,
				color = 'default',
				variant = 'outlined',
				...props
			},
			ref,
		) => {
			const Slot = as || 'article'
			return (
				<Slot
					{...props}
					ref={ref}
					className={cardVariants({
						full,
						color,
						variant,
						className,
					})}
				/>
			)
		},
	),
)

export { Card }
export type { CardProps }
