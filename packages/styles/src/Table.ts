import { tv, type VariantProps } from 'tailwind-variants'

const tableVariants = tv({
	base: 'w-full p-5 rounded-md text-text-default overflow-x-scroll',
	variants: {
		variant: {
			solid: 'bg-content2',
			outlined: 'border-border border-1.5',
			shadow: 'bg-content1',
			light: 'p-0 bg-transparent',
		},

		layout: {
			auto: 'table-auto',
			fixed: 'table-fixed',
		},
		align: {
			start: 'text-left',
			center: 'text-center',
			end: 'text-right',
		},
	},
	defaultVariants: {
		align: 'start',
		layout: 'auto',
		variant: 'solid',
	},
})

const tableContainerVariants = tv({
	base: 'w-full flex flex-col',
})

const tableColumnVariants = tv({
	base: [
		'p-3 bg-overlay/20 text-text-ghost text-xs font-semibold',
		'shadow-none select-none border-none outline-none cursor-default',
		'first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md',
		'first:pl-8 last:pr-8',
	],
})

const tableRowVariants = tv({
	base: 'rounded-md text-text-default transition-all',
	variants: {
		disabled: {
			true: 'text-text-muted select-none',
		},
	},
	defaultVariants: {
		disabled: false,
	},
})

const tableCellVariants = tv({
	base: [
		'px-3 py-2.5 text-sm font-normal',
		'text-gray-900',
		'first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md',
		'first:pl-8 last:pr-8',
	],
})

type TableRowVariants = VariantProps<typeof tableRowVariants>
type TableCellVariants = VariantProps<typeof tableCellVariants>
type TableColumnVariants = VariantProps<typeof tableColumnVariants>
type TableContainerVariants = VariantProps<typeof tableContainerVariants>

type TableVariants = VariantProps<typeof tableVariants> &
	TableRowVariants &
	TableCellVariants &
	TableColumnVariants &
	TableContainerVariants

export {
	tableVariants,
	tableRowVariants,
	tableCellVariants,
	tableColumnVariants,
	tableContainerVariants,
}
export type {
	TableVariants,
	TableRowVariants,
	TableCellVariants,
	TableColumnVariants,
	TableContainerVariants,
}
