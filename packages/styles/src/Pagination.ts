import { tv, type VariantProps } from 'tailwind-variants'

const pageContainerVariants = tv({
	base: 'w-fit flex',
	variants: {
		variant: {
			solid: 'bg-content3',
			outlined: 'p-1 border-px border-border bg-transparent',
			shadow: 'bg-content2',
			light: 'bg-transparent',
		},
		size: {
			xs: 'text-xs rounded-sm',
			sm: 'text-sm rounded-sm',
			md: 'text-md rounded-md',
			lg: 'text-lg rounded-lg',
			xl: 'text-xl rounded-lg',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'solid',
	},
})

const pageControllerVariants = tv({
	base: 'aspect-square flex-center rounded-md text-text-default transition-all',
	variants: {
		size: {
			xs: 'w-6',
			sm: 'w-7',
			md: 'w-9',
			lg: 'w-11',
			xl: 'w-12',
		},
		color: {
			default: 'bg-tag-blue shadow-tag-blue/30',
			foreground: 'bg-foreground text-text-foreground shadow-overlay',

			info: 'bg-tag-blue shadow-tag-blue/30',
			error: 'bg-tag-red shadow-tag-red/30',
			success: 'bg-tag-green shadow-tag-green/30',
			warning: 'bg-tag-yellow shadow-tag-yellow/30',
		},

		shadow: {
			true: 'shadow-md',
			false: 'shadow-none',
		},
		active: {
			true: 'bg-opacity-100',
			false: 'bg-opacity-0 enabled:hover:bg-overlay/20',
		},
		disabled: {
			true: 'opacity-50 cursor-not-allowed',
			false: 'opacity-100',
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'info',

		shadow: false,
		active: false,
		disabled: false,
	},
	compoundVariants: [
		{
			color: ['info', 'error', 'success', 'warning'],
		},
	],
})

type PageContainerVariants = VariantProps<typeof pageContainerVariants>
type PageControllerVariants = VariantProps<typeof pageControllerVariants>

type PaginationVariants = PageContainerVariants & PageControllerVariants

export { pageContainerVariants, pageControllerVariants }
export type { PaginationVariants, PageContainerVariants, PageControllerVariants }
