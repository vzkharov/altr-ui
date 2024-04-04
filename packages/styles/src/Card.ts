import { tv, type VariantProps } from 'tailwind-variants'

const cardVariants = tv({
	base: 'relative py-8 px-7 space-y-8 rounded-lg',
	variants: {
		variant: {
			solid: 'bg-opacity-100 bg-content1',
			outlined: 'bg-[rgb(9,9,12)] border-1.5',
		},
		color: {
			default: 'border-border text-text-default',
			foreground: 'bg-foreground border-foreground text-text-foreground',

			info: 'border-tag-blue text-tag-blue',
			error: 'border-tag-red text-tag-red',
			success: 'border-tag-green text-tag-green',
			warning: 'border-tag-yellow text-tag-yellow',
		},
		full: {
			true: 'w-full',
			false: 'w-fit',
		},
	},
	defaultVariants: {
		color: 'default',
		variant: 'solid',

		full: false,
	},
})

type CardVariants = VariantProps<typeof cardVariants>

export { cardVariants }
export type { CardVariants }
