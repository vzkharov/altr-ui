import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
	Chip,
	Table,
	Checkbox,
	TableRow,
	TableBody,
	TableCell,
	Pagination,
	TableHeader,
	TableColumn,
	type ChipProps,
	type TableProps,
	type TableRowType,
	type TableColumnType,
} from '@altrui/react'

import { random } from '../helpers/array'
import { DEFAULT_CONTROLS } from '../utils'

type User = {
	name: string
	role?: string

	status: React.ReactElement
	actions: React.ReactElement
}

const chipProps: ChipProps[] = [
	{ value: 'Active', color: 'success' },
	{ value: 'Paused', color: 'error' },
	{ value: 'Vacation', color: 'warning' },
]

const generateData = (size: number): TableRowType<User>[] =>
	new Array(size).fill(0).map((_, idx) => ({
		id: String(idx),
		role: 'CEO',
		name: `User Name ${idx}`,
		actions: <Checkbox size="xs" />,
		status: (
			<Chip
				variant="shadow"
				className="py-0.5 px-3"
				{...random(chipProps)}
			/>
		),
	}))

const data = generateData(6)
const largeData = generateData(15)

const columns: TableColumnType<User>[] = [
	{
		key: 'actions',
	},
	{
		key: 'name',
		children: 'name',
	},
	{
		key: 'role',
		children: 'role',
	},
	{
		key: 'status',
		children: 'status',
	},
]

export default {
	id: 'Table',
	title: 'Table',
	component: Table,
	args: {
		variant: 'outlined',
	},
	argTypes: {
		variant: DEFAULT_CONTROLS.variant,
		layout: {
			options: ['auto', 'fixed'],
			control: { type: 'select' },
		},
	},
	render: ({ children, ...args }) => (
		<Table
			{...args}
			containerClassName="w-[750px]"
		>
			<TableHeader columns={columns}>
				{(column) => <TableColumn {...column} />}
			</TableHeader>
			<TableBody rows={data}>
				{(row) => (
					<TableRow
						key={row.id}
						columns={columns}
					>
						{(columnKey) => (
							<TableCell key={columnKey}>
								{row[columnKey]}
							</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	),
} as Meta<TableProps>

type Story = StoryObj<TableProps>

export const Default: Story = {}

export const Variant: Story = {
	args: { variant: 'outlined' },
}

export const WithContent: Story = {
	args: {
		title: 'Table title',
		description: 'This is me, table hint',
	},
}

export const WithPagination: Story = {
	render: ({ children, ...args }) => {
		const [page, setPage] = React.useState<number>(1)

		const rowsPerPage = 4

		const pages = Math.ceil(largeData.length / rowsPerPage)

		const rows = React.useMemo(() => {
			const start = (page - 1) * rowsPerPage
			const end = start + rowsPerPage

			return largeData.slice(start, end)
		}, [page])

		return (
			<Table
				{...args}
				className="h-[300px]"
				containerClassName="w-[750px]"
				footer={
					<Pagination
						total={pages}
						initialPage={page}
						onChange={setPage}
					/>
				}
			>
				<TableHeader columns={columns}>
					{(column) => <TableColumn {...column} />}
				</TableHeader>
				<TableBody rows={rows}>
					{(row) => (
						<TableRow<User>
							key={row.id}
							columns={columns}
						>
							{(columnKey) => (
								<TableCell key={columnKey}>
									{row[columnKey]}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>
		)
	},
	args: {
		title: 'Table title',
		description: 'This is me, table hint',
	},
}
