import { tv, type VariantProps } from 'tailwind-variants'

const listVariants = tv({
	base: 'flex',
	variants: {
		size: {
			xs: 'gap-3 text-sm',
			sm: 'gap-3 text-sm',
			md: 'gap-4 text-base',
			lg: 'gap-5 text-lg',
			xl: 'gap-5 text-lg',
		},
		dir: {
			x: 'flex-row',
			y: 'flex-col',
		},

		wrap: {
			true: 'flex-row flex-wrap',
			false: '',
		},
	},
	defaultVariants: {
		dir: 'y',
		size: 'md',
		wrap: false,
	},
})

const listItemVariants = tv({
	base: 'flex items-center gap-x-2',
	variants: {
		color: {
			default: ' text-tag-blue',
			foreground: 'text-foreground',
			info: ' text-tag-blue',
			error: ' text-tag-red',
			success: ' text-tag-green',
			warning: 'text-tag-yellow',
		},
		disabled: {
			true: 'text-text-muted',
			false: '',
		},
	},
	defaultVariants: {
		color: 'default',
		disabled: false,
	},
})

const listItemVariantsSlots = tv({
	slots: {
		container: 'flex items-center gap-x-2',
		circle: 'w-4 aspect-square',
		text: 'text-text-default',
	},
	variants: {
		color: {
			default: {
				container: '',
				text: '',
			},
			foreground: 'text-foreground',
			info: ' text-tag-blue',
			error: ' text-tag-red',
			success: ' text-tag-green',
			warning: 'text-tag-yellow',
		},
		disabled: {
			true: 'text-text-muted',
			false: '',
		},
	},
	defaultVariants: {
		color: 'default',
		disabled: false,
	},
})

type ListVariants = VariantProps<typeof listVariants>
type ListItemVariants = VariantProps<typeof listItemVariants>

export { listVariants, listItemVariants, listItemVariantsSlots }
export type { ListVariants, ListItemVariants }
