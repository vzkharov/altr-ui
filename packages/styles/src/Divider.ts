import { tv, type VariantProps } from 'tailwind-variants'

const dividerVariants = tv({
	base: 'relative z-0',
	variants: {
		color: {
			default: 'bg-divider',
			foreground: 'bg-foreground',

			info: 'bg-tag-blue',
			error: 'bg-tag-red',
			success: 'bg-tag-green',
			warning: 'bg-tag-yellow',
		},

		dir: {
			x: 'w-full h-[1.5px]',
			y: 'h-full w-[1.5px]',
		},
	},
	defaultVariants: {
		dir: 'x',
		color: 'default',
	},
})

type DividerVariants = VariantProps<typeof dividerVariants>

export { dividerVariants }
export type { DividerVariants }
