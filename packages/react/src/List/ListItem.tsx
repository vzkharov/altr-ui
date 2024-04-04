'use client'

import { memo } from 'react'

import type { MergeWithHTMLProps } from '@altrui/core/utils'
import { listItemVariants, type ListItemVariants } from '@altrui/styles'

import { Text } from '../Text'

type ListItemProps = MergeWithHTMLProps<
	'li',
	ListItemVariants & {
		strokeWidth?: number | string | undefined
	}
>

const ListItem = memo(
	({
		color,
		children,
		className,
		disabled = false,
		strokeWidth = 2,
		...props
	}: ListItemProps) => (
		<li
			{...props}
			className={listItemVariants({ color, disabled, className })}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				width="1.5em"
				height="1.5em"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			>
				<circle
					r="10"
					cx="12"
					cy="12"
				/>
				<circle
					r="4"
					cx="12"
					cy="12"
					fill="currentColor"
				/>
			</svg>

			<Text
				truncated
				color="default"
				disabled={disabled}
			>
				{children}
			</Text>
		</li>
	),
)

export { ListItem }
export type { ListItemProps }
