import { memo, forwardRef } from 'react'
import { chipVariants, type ChipVariants } from '@altrui/styles'
import type { MergeWithHTMLProps, ReactChildren } from '@altrui/core/utils'

import { CloseButton } from './Button'

type ChipProps = MergeWithHTMLProps<
	'div',
	ChipVariants & {
		value: string | number

		iconLeft?: ReactChildren
		iconRight?: ReactChildren

		removeable?: boolean
		onRemove?: (val: string | number) => unknown
	}
>

const Chip = memo(
	forwardRef<HTMLDivElement, ChipProps>(
		(
			{
				value,
				onRemove,
				iconLeft,
				iconRight,
				className,
				size = 'md',
				color = 'default',
				variant = 'solid',
				disabled = false,
				gradient = false,
				removeable = false,
				...props
			},
			ref,
		) => (
			<div
				ref={ref}
				className={chipVariants({
					size,
					color,
					variant,
					gradient,
					disabled,
					className,
				})}
				{...props}
			>
				{iconLeft ? <span>{iconLeft}</span> : null}
				<span>{value}</span>
				{iconRight ? <span>{iconRight}</span> : null}
				{removeable ? (
					<CloseButton onClick={() => onRemove?.(value)} />
				) : null}
			</div>
		),
	),
)

export { Chip }
export type { ChipProps }
