import { tv, type VariantProps } from 'tailwind-variants'

const alertVariants = tv({
	base: 'relative max-h-screen max-w-screen p-8 pb-10 flex flex-col items-center rounded-xl',
	variants: {
		color: {
			default: 'text-text-default',

			info: 'text-tag-blue',
			error: 'text-tag-red',
			success: 'text-tag-green',
			warning: 'text-tag-yellow',
		},
	},
	defaultVariants: {
		color: 'default',
	},
})

type AlertVariants = VariantProps<typeof alertVariants>

export { alertVariants }
export type { AlertVariants }
