import { tv, type VariantProps } from 'tailwind-variants'

const loadingVariants = tv({
	base: 'w-fit',
	variants: {
		color: {
			default: 'text-text-default',
			foreground: 'text-text-foreground',
			info: 'text-tag-blue',
			error: 'text-tag-red',
			success: 'text-tag-green',
			warning: 'text-tag-yellow',
		},
	},
})

type LoadingVariants = VariantProps<typeof loadingVariants>

export { loadingVariants }
export type { LoadingVariants }
