'use client'

import { memo, forwardRef } from 'react'

import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { tableCellVariants, type TableCellVariants } from '@altrui/styles'

type TableCellProps = MergeWithHTMLProps<'td', TableCellVariants>

const TableCell = memo(
	forwardRef<HTMLTableDataCellElement, TableCellProps>(
		({ children, className, ...props }, ref) => (
			<td
				ref={ref}
				className={tableCellVariants({ className })}
				{...props}
			>
				{children}
			</td>
		),
	),
)

export { TableCell }
export type { TableCellProps }
