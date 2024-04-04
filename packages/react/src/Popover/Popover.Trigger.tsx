'use client'

import { memo, forwardRef } from 'react'

import { clsx } from '@altrui/core/utils/clsx'
import { mergeRef } from '@altrui/core/helpers/refs'
import type { ChildrenRender, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { StopPropogation } from '../StopPropogation'

import { usePopoverContext, type PopoverConfig } from './context'

type PopoverTriggerProps = MergeWithHTMLProps<
	'div',
	{
		children?: ChildrenRender<PopoverConfig>
	}
>

const PopoverTrigger = memo(
	forwardRef<HTMLDivElement, PopoverTriggerProps>(
		({ onClick, children, className, ...props }, externalRef) => {
			const ctx = usePopoverContext()
			const ref = mergeRef([externalRef, ctx.triggerRef])

			return (
				<StopPropogation
					{...props}
					ref={ref}
					onClick={(event) => {
						ctx.toggle?.()
						onClick?.(event)
					}}
					className={clsx('w-auto h-auto cursor-pointer', className)}
				>
					{typeof children === 'function' ? children(ctx) : children}
				</StopPropogation>
			)
		},
	),
)

export { PopoverTrigger }
export type { PopoverTriggerProps }
