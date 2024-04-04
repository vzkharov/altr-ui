'use client'

import { memo, forwardRef, type CSSProperties } from 'react'

import type { ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils/types'
import { tableVariants, tableContainerVariants, type TableVariants } from '@altrui/styles'

import { Spacer } from '../Spacer'
import { Hint, Title } from '../Text'

type TableProps = MergeWithHTMLProps<
	'table',
	TableVariants &
		Partial<{
			title: ReactChildren
			footer: ReactChildren
			description: ReactChildren

			containerClassName: string
			containerStyle: CSSProperties
		}>
>

const Table = memo(
	forwardRef<HTMLTableElement, TableProps>(
		(
			{
				title,
				footer,
				children,
				className,
				description,
				containerStyle,
				containerClassName,
				align = 'start',
				layout = 'auto',
				variant = 'solid',
				...props
			},
			ref,
		) => (
			<div
				style={containerStyle}
				className={tableContainerVariants({
					className: containerClassName,
				})}
			>
				{title || description ? (
					<div className="space-y-1.5 mb-5">
						<Title size={20}>{title}</Title>
						<Hint
							size={14}
							className="select-none"
						>
							{description}
						</Hint>
					</div>
				) : null}

				<div
					className={tableVariants({
						align,
						layout,
						variant,
						className,
					})}
				>
					<table
						{...props}
						ref={ref}
						className="w-full"
					>
						{children}
					</table>
				</div>

				{footer ? (
					<>
						<Spacer
							full
							y={25}
						/>
						{footer}
					</>
				) : null}
			</div>
		),
	),
)

export { Table }
export type { TableProps }
