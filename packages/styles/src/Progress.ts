import { tv, type VariantProps } from 'tailwind-variants'

const progressVariants = tv({
	slots: {
		container: 'relative w-full h-1.5 bg-content3 rounded-full',
		bar: 'h-full rounded-full transition-all',
	},
	variants: {
		color: {
			default: { bar: 'bg-gradient-to-r from-gradient-start to-gradient-end' },
			foreground: { bar: 'bg-foreground' },

			info: { bar: 'bg-tag-blue' },
			error: { bar: 'bg-tag-red' },
			success: { bar: 'bg-tag-green' },
			warning: { bar: 'bg-tag-yellow' },
		},

		animated: {
			true: { bar: '' },
		},
	},
	defaultVariants: {
		color: 'default',

		animated: false,
	},
})

type ProgressVariants = VariantProps<typeof progressVariants>

export { progressVariants }
export type { ProgressVariants }
