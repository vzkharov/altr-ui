import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
	slots: {
		container: 'transition-all',
		button: 'w-full flex flex-row items-center justify-center',
		text: 'font-medium',
	},
	variants: {
		variant: {
			solid: { button: 'bg-content3' },
			light: { button: 'bg-transparent' },
		},
		size: {
			xs: { button: 'px-2 h-8  w-32 rounded-xs space-x-2', text: 'text-sm' },
			sm: { button: 'px-3 h-10 w-36 rounded-sm space-x-3', text: 'text-base' },
			md: {
				button: 'px-4 h-12 w-44 rounded-md space-x-4',
				text: 'text-base font-semibold',
			},
			lg: {
				button: 'px-5 h-14 w-48 rounded-md space-x-4',
				text: 'text-lg font-semibold',
			},
			xl: {
				button: 'px-6 h-16 w-52 rounded-lg space-x-4',
				text: 'text-xl font-semibold',
			},
		},

		color: {
			default: { text: 'text-text-default' },
			info: { text: 'text-tag-blue' },
			error: { text: 'text-tag-red' },
			success: { text: 'text-tag-green' },
			warning: { text: 'text-tag-yellow' },
		},
		full: {
			flex: {
				container: 'flex-1',
				button: 'w-full',
			},
			true: {
				container: 'w-full',
				button: 'w-full',
			},
			false: {
				container: 'w-fit',
				button: 'w-fit',
			},
		},
		disabled: {
			true: { container: 'opacity-60', text: '' },
		},
		readOnly: {
			true: { container: 'pointer-events-none' },
		},
		loading: {
			true: {
				container: 'opacity-80 pointer-events-none',
			},
		},
		auto: {
			true: {
				button: 'h-fit',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',
		variant: 'solid',
		auto: false,
		loading: false,
		readOnly: false,
	},
	compoundVariants: [
		{
			variant: 'light',
			className: {
				button: 'px-0 space-x-0',
			},
		},
	],
})

type ButtonVariants = VariantProps<typeof buttonVariants>

export { buttonVariants }
export type { ButtonVariants }
