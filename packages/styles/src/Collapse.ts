import { tv, type VariantProps } from 'tailwind-variants'

const collapseVariants = tv({
	slots: {
		container: 'h-fit rounded-md transition-all',

		title: 'text-base font-medium',
		description: 'mt-1 text-sm font-normal',

		trigger: 'w-full flex items-center text-left  select-none ',
		content: 'text-md font-normal ',
	},
	variants: {
		size: {
			xs: {
				title: '',
				description: '',
			},
			sm: {
				title: 'text-sm font-normal',
				description: 'text-sm',
				trigger: 'py-3 px-3',
				content: 'pb-3 px-3',
			},
			md: {
				trigger: 'py-5 px-5',
				content: 'pb-5 px-5',
			},
			lg: {
				title: '',
				description: '',
			},
			xl: {
				title: '',
				description: '',
			},
		},
		variant: {
			solid: {
				container: 'bg-opacity-100',
			},
			outlined: {
				container: '!bg-transparent border-1.5',
			},
			shadow: {
				container: 'bg-opacity-10',
			},
			light: {
				container: '!bg-transparent',
				trigger: 'px-0',
				content: 'px-0',
			},
		},
		color: {
			default: {
				container: 'bg-content2 border-border text-text-default',
				description: 'text-text-ghost',
			},
			foreground: {
				container: 'bg-foreground/100 border-foreground/100 text-text-foreground/100',
				description: 'text-text-ghost',
			},

			info: {
				container: 'bg-tag-blue border-tag-blue',
				trigger: 'text-tag-blue',
			},
			error: {
				container: 'bg-tag-red border-tag-red',
				trigger: 'text-tag-red',
			},
			success: {
				container: 'bg-tag-green border-tag-green',
				trigger: 'text-tag-green',
			},
			warning: {
				container: 'bg-tag-yellow border-tag-yellow',
				trigger: 'text-tag-yellow',
			},
		},

		disabled: {
			true: {
				container: 'opacity-50',
				trigger: 'cursor-not-allowed',
			},
			false: {
				trigger: 'cursor-pointer',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',
		variant: 'solid',

		full: false,
		auto: false,
		disabled: false,
	},
	compoundVariants: [
		{
			variant: 'solid',
			color: 'info',
			className: {
				container: 'text-text-default',
				title: 'text-text-default',
				description: 'text-text-default',
			},
		},
		{
			variant: 'solid',
			color: ['error', 'success', 'warning'],
			className: {
				container: 'text-black',
				title: 'text-black',
				description: 'text-black',
			},
		},
		{
			variant: 'shadow',
			color: 'default',
			className: {
				container: 'bg-content1',
			},
		},
	],
})

type CollapseVariants = VariantProps<typeof collapseVariants>

export { collapseVariants }
export type { CollapseVariants }
