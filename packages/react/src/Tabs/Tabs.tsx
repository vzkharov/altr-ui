'use client'

import { memo, forwardRef, useId } from 'react'
import { LayoutGroup } from 'framer-motion'

import { useControlledValue } from '@altrui/core/hooks'
import { tabGroupVariants, type TabsVariant } from '@altrui/styles'
import type { ArrowFunction, MergeWithHTMLProps } from '@altrui/core/utils/types'

import type { Item } from './types'
import { TabsContext } from './context'

type TabsProps = MergeWithHTMLProps<
	'ul',
	TabsVariant &
		Partial<{
			gap: string | number

			item: Item
			initialItem: Item

			disableAnimation: boolean

			onChange: ArrowFunction<[Item]>
		}>
>

const Tabs = memo(
	forwardRef<HTMLUListElement, TabsProps>(
		(
			{
				item,
				style,
				readOnly,
				children,
				onChange,
				className,
				initialItem,
				gap = 2,
				dir = 'x',
				size = 'md',
				full = false,
				color = 'default',
				variant = 'solid',
				underlined = false,
				disableAnimation = false,
				...props
			},
			ref,
		) => {
			const layoutId = useId()
			const [selectedItem, setSelectedItem] = useControlledValue<Item>({
				readOnly,
				onChange,
				value: item,
				initialValue: initialItem,
			})

			return (
				<LayoutGroup id={layoutId}>
					<TabsContext.Provider
						value={{
							dir,
							size,
							color,
							readOnly,
							underlined,
							selectedItem,
							setSelectedItem,
							disableAnimation,
							id: layoutId,
						}}
					>
						<ul
							ref={ref}
							{...props}
							style={{ gap, ...style }}
							className={tabGroupVariants({
								dir,
								size,
								full,
								variant,
								underlined,
								className,
							})}
						>
							{children}
						</ul>
					</TabsContext.Provider>
				</LayoutGroup>
			)
		},
	),
)

export { Tabs }
export type { TabsProps }
