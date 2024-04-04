'use client'

import { memo, forwardRef } from 'react'
import { motion } from 'framer-motion'

import { tabItemVariants } from '@altrui/styles'
import { slideTransition } from '@altrui/core/utils/framer-motion'
import type { ArrowFunction, ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils/types'

import type { Item } from './types'
import { useTabsContext } from './context'

type TabProps = MergeWithHTMLProps<
	'button',
	Item &
		Partial<{
			active: boolean
			onClick: ArrowFunction<[string]>

			iconLeft: ReactChildren
			iconRight: ReactChildren
		}>
>

const Tab = memo(
	forwardRef<HTMLButtonElement, TabProps>(
		(
			{
				name,
				onClick,
				iconLeft,
				disabled,
				iconRight,
				className,
				id: tabId,
				active: globalActive,
				...props
			},
			ref,
		) => {
			const {
				id,
				dir,
				size,
				color,
				readOnly,
				underlined,
				selectedItem,
				disableAnimation,
				setSelectedItem,
			} = useTabsContext()

			const localActive = tabId === selectedItem?.id
			const active = globalActive ?? localActive
			const clickable = !(readOnly || disabled)

			const handleClick: React.MouseEventHandler = (_event) => {
				setSelectedItem?.({ id: tabId, name })
				onClick?.(tabId)
			}

			const { container, thumb, trigger } = tabItemVariants({
				dir,
				size,
				color,
				active,
				readOnly,
				underlined,
			})

			return (
				<li className={container()}>
					{active && !disableAnimation ? (
						<motion.span
							layout
							layoutId={id}
							id={`tabs-thumb-${id}`}
							className={thumb()}
							layoutDependency={false}
							transition={
								disableAnimation
									? undefined
									: slideTransition
							}
						/>
					) : null}

					<button
						{...props}
						ref={ref}
						disabled={!clickable}
						onClick={handleClick}
						className={trigger({ className })}
					>
						{iconLeft}
						{name}
						{iconRight}
					</button>
				</li>
			)
		},
	),
)

export { Tab }
export type { TabProps }
