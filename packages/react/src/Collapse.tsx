'use client'

import { memo, forwardRef, useId } from 'react'
import { motion, useWillChange, AnimatePresence } from 'framer-motion'

import { useToggle } from '@altrui/core/hooks'
import { TRANSITION_VARIANTS } from '@altrui/core/utils/framer-motion'
import { collapseVariants, type CollapseVariants } from '@altrui/styles'
import type { ReactChildren, ArrowFunction, MergeWithHTMLProps } from '@altrui/core/utils/types'

type CollapseProps = MergeWithHTMLProps<
	'div',
	CollapseVariants & {
		title: ReactChildren
		description?: ReactChildren

		open?: boolean
		initialOpen?: boolean
		onChange?: ArrowFunction<[boolean]>

		contentLeft?: ReactChildren
		contentRight?: ReactChildren
	}
>

const Collapse = memo(
	forwardRef<HTMLDivElement, CollapseProps>(
		(
			{
				open,
				title,
				onChange,
				children,
				className,
				description,
				contentLeft,
				contentRight,
				disabled = false,
				initialOpen = false,
				size = 'md',
				color = 'default',
				variant = 'solid',
				...props
			},
			ref,
		) => {
			const id = useId()
			const willChange = useWillChange()

			const [isOpen, { toggle }] = useToggle({
				onChange,
				disabled,
				value: open,
				initialValue: initialOpen,
			})

			const {
				content,
				trigger,
				container,
				title: titleStyles,
				description: descriptionStyles,
			} = collapseVariants({
				size,
				color,
				variant,
				disabled,
			})

			return (
				<div
					ref={ref}
					className={container({ className })}
					{...props}
				>
					<motion.div
						initial={false}
						onClick={toggle}
						className={trigger()}
					>
						{contentLeft ? (
							<div className="mr-3">{contentLeft}</div>
						) : null}
						<div className="flex-1">
							<h2 className={titleStyles()}>{title}</h2>
							<span className={descriptionStyles()}>
								{description}
							</span>
						</div>
						{contentRight ? (
							<div className="ml-3">{contentRight}</div>
						) : null}
					</motion.div>

					<AnimatePresence initial={false}>
						{isOpen ? (
							<motion.section
								key={`collapse-content-${id}`}
								exit="exit"
								initial="exit"
								animate="enter"
								variants={
									TRANSITION_VARIANTS.collapse
								}
								style={{
									overflowY: 'hidden',
									willChange,
								}}
							>
								<div className={content()}>
									{children}
								</div>
							</motion.section>
						) : null}
					</AnimatePresence>
				</div>
			)
		},
	),
)

export { Collapse }
export type { CollapseProps }
