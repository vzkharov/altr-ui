'use client'

import { clsx } from '@altrui/core/utils'
import type { XOR, ReactChildren, ArrowFunction, MergeWithHTMLProps } from '@altrui/core/utils'

import type { TableColumnType } from '../types'

type Props<T = {}> = XOR<
	{
		children: ReactChildren
	},
	{
		columns: TableColumnType<T>[]
		children: ArrowFunction<[TableColumnType<T>], ReactChildren>
	}
>

type TableHeaderProps<T = {}> = MergeWithHTMLProps<'thead', Props<T>>

const TableHeader = <T,>({ children, columns, className, ...props }: TableHeaderProps<T>) => (
	<thead
		{...props}
		className={clsx('p-3', className)}
	>
		<tr>{columns ? columns.map(children) : children}</tr>
	</thead>
)

export { TableHeader }
export type { TableHeaderProps }
