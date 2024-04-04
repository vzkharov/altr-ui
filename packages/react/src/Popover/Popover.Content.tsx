'use client'

import { memo, useId, forwardRef } from 'react'
import { motion, useWillChange, AnimatePresence, type HTMLMotionProps } from 'framer-motion'

import { mergeRef } from '@altrui/core/helpers'
import { popoverContentVariants } from '@altrui/styles'
import { TRANSITION_VARIANTS, type ChildrenRender } from '@altrui/core/utils'

import { Portal } from '../Portal'

import { usePopoverContext, type PopoverConfig } from './context'

type PopoverContentProps = HTMLMotionProps<'div'> & {
	children?: ChildrenRender<PopoverConfig>
}

const PopoverContent = memo(
	forwardRef<HTMLDivElement, PopoverContentProps>(
		({ style, children, className, ...props }, externalRef) => {
			const id = useId()
			const willChange = useWillChange()
			const { css, color, ...ctx } = usePopoverContext()

			const ref = mergeRef([externalRef, ctx.contentRef])

			return (
				<Portal>
					<AnimatePresence initial={false}>
						{ctx.visible ? (
							<motion.div
								{...props}
								key={`popover-content-${id}`}
								ref={ref}
								exit="exit"
								initial="exit"
								animate="enter"
								style={{
									...css,
									...style,
									willChange,
								}}
								className={popoverContentVariants({
									color,
									className,
								})}
								variants={
									TRANSITION_VARIANTS.slideFade
								}
							>
								{typeof children === 'function'
									? children(ctx)
									: children}
							</motion.div>
						) : null}
					</AnimatePresence>
				</Portal>
			)
		},
	),
)

export { PopoverContent }
export type { PopoverContentProps }
