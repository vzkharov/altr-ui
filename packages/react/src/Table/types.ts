import type { ReactChildren } from '@altrui/core/utils/types'

type TableRow<T = {}> = T & {
	id: string
}

type TableColumn<T = {}> = { key: keyof T; children?: ReactChildren }

export type { TableRow as TableRowType, TableColumn as TableColumnType }
