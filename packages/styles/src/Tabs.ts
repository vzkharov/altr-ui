import { tv, type VariantProps } from 'tailwind-variants'

const tabGroupVariants = tv({
	base: 'w-fit flex',
	variants: {
		variant: {
			solid: 'bg-content3',
			outlined: 'border-1.5 border-border',
			shadow: 'bg-content2',
			light: 'bg-none',
		},
		size: {
			xs: 'h-9  text-sm rounded-md p-1',
			sm: 'h-10 text-sm rounded-md p-1',
			md: 'h-11 text-base rounded-md p-1',
			lg: 'h-12 text-lg rounded-lg p-1.5',
			xl: 'h-14 text-xl rounded-lg p-1.5',
		},
		dir: {
			x: 'flex-row',
			y: 'flex-col h-unset',
		},

		full: {
			true: 'w-full',
			false: 'w-max',
		},
		underlined: {
			true: 'p-0 w-full flex-row bg-transparent border-border border-b-1.5 rounded-none',
		},
	},
	defaultVariants: {
		dir: 'x',
		size: 'md',
		variant: 'solid',

		full: false,
		underlined: false,
	},
	compoundVariants: [
		{
			variant: 'light',
			className: 'p-0',
		},
	],
})

const tabItemVariants = tv({
	slots: {
		container: 'relative z-0 w-full h-full',
		thumb: 'absolute inset-0 z-0',
		trigger: [
			'relative z-10 w-fit min-w-max h-full py-2 px-3',
			'flex items-center gap-3 font-normal',
			'transition-all',
		],
	},
	variants: {
		size: {
			xs: { thumb: 'rounded-sm' },
			sm: { thumb: 'rounded-sm' },
			md: { thumb: 'rounded-sm' },
			lg: { thumb: 'rounded-md' },
			xl: { thumb: 'rounded-md' },
		},
		color: {
			default: { thumb: 'bg-gray-800', trigger: 'text-text-default' },
			foreground: {
				thumb: 'bg-foreground/100',
				trigger: 'text-text-foreground/100 hover:text-text-foreground/100',
			},
			info: { thumb: 'bg-tag-blue', trigger: 'text-tag-blue' },
			error: { thumb: 'bg-tag-red', trigger: 'text-tag-red' },
			success: { thumb: 'bg-tag-green', trigger: 'text-tag-green' },
			warning: { thumb: 'bg-tag-yellow', trigger: 'text-tag-yellow' },
		},

		dir: {
			x: { trigger: 'gap-2 px-4' },
			y: { trigger: 'gap-4' },
		},
		readOnly: {
			true: {
				container: 'pointer-events-none',
			},
			false: {
				container: '',
			},
		},
		active: {
			true: {
				trigger: 'font-normal',
			},
			false: {
				trigger: 'font-normal [&:not(:hover)]:!text-text-ghost',
			},
		},
		underlined: {
			true: {
				container: 'w-fit',
				thumb: 'inset-x-0 top-full h-0.5 bg-opacity-100 rounded-full',
				trigger: 'pl-3 pr-4 pb-3',
			},
			false: {
				container: 'w-full',
				thumb: '!bg-opacity-[0.15]',
			},
		},
	},

	defaultVariants: {
		dir: 'x',
		color: 'default',

		active: false,
		readOnly: false,
		underlined: false,
	},
	compoundVariants: [
		{
			dir: 'y',
			className: { trigger: 'w-full' },
		},
		{
			color: 'default',
			underlined: true,
			className: { thumb: 'bg-foreground/100' },
		},
	],
})

type TabItemVariant = VariantProps<typeof tabItemVariants>
type TabGroupVariant = VariantProps<typeof tabGroupVariants>

type TabsVariant = TabItemVariant & TabGroupVariant

export { tabGroupVariants, tabItemVariants }
export type { TabsVariant, TabItemVariant, TabGroupVariant }
