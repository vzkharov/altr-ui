'use client'

import type {
	XOR,
	ReactChildren,
	ArrowFunction,
	MergeWithHTMLProps,
} from '@altrui/core/utils/types'
import { tableRowVariants, type TableRowVariants } from '@altrui/styles'

import { TableColumnType } from '../types'

type Props<T> = TableRowVariants &
	XOR<
		{
			children: ReactChildren
		},
		{
			columns: TableColumnType<T>[]
			children: ArrowFunction<[keyof T], ReactChildren>
		}
	>

type TableRowProps<T> = MergeWithHTMLProps<'tr', Props<T>>

const TableRow = <T,>({
	columns,
	children,
	className,
	disabled = false,
	...props
}: TableRowProps<T>) => {
	return (
		<tr
			{...props}
			className={tableRowVariants({ disabled, className })}
		>
			{columns ? columns.map(({ key }) => children(key)) : children}
		</tr>
	)
}

export { TableRow }
export type { TableRowProps }
