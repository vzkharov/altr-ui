import { tv, type VariantProps } from 'tailwind-variants'

const gridVariants = tv({
	base: 'relative z-0',
	variants: {
		dir: {
			x: 'flex-row',
			y: 'flex-col',
		},
	},
	defaultVariants: {
		dir: undefined,
	},
})

type GridVariants = VariantProps<typeof gridVariants>

export { gridVariants }
export type { GridVariants }
