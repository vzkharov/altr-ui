'use client'

import { memo } from 'react'

import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { tableColumnVariants, type TableColumnVariants } from '@altrui/styles'

type TableColumnProps = MergeWithHTMLProps<'th', TableColumnVariants>

const TableColumn = memo<TableColumnProps>(({ children, className, ...props }) => (
	<td
		{...props}
		className={tableColumnVariants({ className })}
	>
		{typeof children === 'string' ? children.toUpperCase() : children}
	</td>
))

export { TableColumn }
export type { TableColumnProps }
