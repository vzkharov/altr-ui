'use client'

import { memo, forwardRef } from 'react'
import { tooltipVariants, type TooltipVariants } from '@altrui/styles'
import type { ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Popover, PopoverTrigger, PopoverContent, type PopoverProps } from './Popover'

type TooltipProps = MergeWithHTMLProps<
	'div',
	Omit<PopoverProps, 'children'> &
		TooltipVariants & {
			enterDelay?: number
			leaveDelay?: number

			content: ReactChildren
			children: ReactChildren
		}
>

const Tooltip = memo(
	forwardRef<HTMLDivElement, TooltipProps>(
		(
			{
				content,
				children,
				className,
				enterDelay = 0,
				leaveDelay = 0,
				color = 'default',
				variant = 'solid',
				...props
			},
			ref,
		) => {
			if (!children) {
				return null
			}

			return (
				<Popover {...props}>
					<PopoverTrigger>
						{({ open, close }) => (
							<div
								ref={ref}
								onBlur={close}
								onFocus={open}
								onMouseEnter={open}
								onMouseLeave={close}
								className="cursor-auto w-fit h-fit"
							>
								{children}
							</div>
						)}
					</PopoverTrigger>

					<PopoverContent
						className={tooltipVariants({
							color,
							variant,
							className,
						})}
					>
						{content}
					</PopoverContent>
				</Popover>
			)
		},
	),
)

export { Tooltip }
export type { TooltipProps }
