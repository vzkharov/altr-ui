'use client'

import type {
	XOR,
	ReactChildren,
	ArrowFunction,
	MergeWithHTMLProps,
} from '@altrui/core/utils/types'

import { Spacer } from '../../Spacer'

import type { TableRowType } from '../types'

type Props<T> = XOR<
	{
		children: ReactChildren
	},
	{
		rows: TableRowType<T>[]
		children: ArrowFunction<[TableRowType<T>], ReactChildren>
	}
>

type TableBodyProps<T = unknown> = MergeWithHTMLProps<'tbody', Props<T>>

const TableBody = <T,>({ rows, children, ...props }: TableBodyProps<T>) => (
	<tbody {...props}>
		<Spacer y={10} />
		{rows ? rows.map(children) : children}
	</tbody>
)

export { TableBody }
export type { TableBodyProps }
