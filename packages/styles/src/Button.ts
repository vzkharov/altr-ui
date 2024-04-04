import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
	base: [
		'relative group z-0 overflow-hidden py-2 px-4 ',
		'flex-center gap-x-2 font-medium',
		'cursor-pointer transition-all shadow-none outline-none select-none',
		'enabled:focus:outline-1 enabled:focus:outline-dashed enabled:focus:outline-[inherit] enabled:active:scale-[0.97]',
	],
	variants: {
		variant: {
			solid: 'bg-opacity-100 enabled:hover:brightness-125',
			outlined: 'border-1.5 !bg-transparent',
			shadow: 'bg-opacity-10 enabled:hover:bg-opacity-[.15]',
			light: 'bg-opacity-0 enabled:hover:bg-opacity-10',
		},
		color: {
			default: 'bg-content3 border-border text-text-default enabled:hover:border-foreground',
			foreground: 'bg-foreground/100 border-foreground/100 text-text-foreground/100 enabled:hover:border-border/100',

			info: 'bg-tag-blue border-tag-blue text-tag-blue',
			error: 'bg-tag-red border-tag-red text-tag-red',
			success: 'bg-tag-green border-tag-green text-tag-green',
			warning: 'bg-tag-yellow border-tag-yellow text-tag-yellow',
		},
		size: {
			xs: 'w-32 h-9  text-sm rounded-md',
			sm: 'w-36 h-10 text-sm rounded-md',
			md: 'w-44 h-11 text-base rounded-md',
			lg: 'w-48 h-12 text-lg rounded-lg',
			xl: 'w-56 h-14 text-xl rounded-lg',
		},

		gradient: {
			true: 'bg-gradient-to-r from-gradient-start to-gradient-end !font-semibold !text-black enabled:hover:!opacity-90 !border-none',
		},
		full: {
			true: 'w-full',
		},
		auto: {
			true: 'w-fit px-2.5',
		},
		loading: {
			true: 'cursor-wait',
		},
		disabled: {
			true: 'opacity-60 cursor-not-allowed',
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',
		variant: 'solid',
		full: false,
		auto: false,
		loading: false,
		disabled: false,
		gradient: false,
	},
	compoundVariants: [
		{
			variant: 'solid',
			color: ['info', 'error', 'warning', 'success'],
			className: 'text-black font-semibold',
		},

		{
			variant: 'shadow',
			color: 'default',
			className: 'bg-overlay/10 enabled:hover:bg-overlay/20',
		},
		{
			variant: 'light',
			color: 'default',
			className: 'bg-overlay/0 enabled:hover:bg-overlay/10',
		},
		{
			variant: 'outlined',
			className: 'bg-transparent',
		},
	],
})

const buttonIconVariants = tv({
	extend: buttonVariants,
	base: 'flex-center p-2 flex-none',
	variants: {
		size: {
			xs: 'w-9 h-9  text-sm rounded-md',
			sm: 'w-10 h-10 text-sm rounded-md',
			md: 'w-11 h-11 text-base rounded-md',
			lg: 'w-12 h-12 text-lg rounded-lg',
			xl: 'w-14 h-14 text-xl rounded-lg',
		},
		auto: {
			true: 'p-1.5 !h-auto !w-auto',
			false: '',
		},
		fullHeight: {
			true: 'items-center h-auto py-0',
			false: '!aspect-square',
		},
	},
	defaultVariants: {
		fullHeight: false,
	},
})

type ButtonVariants = VariantProps<typeof buttonVariants>
type ButtonIconVariants = VariantProps<typeof buttonIconVariants>

export { buttonVariants, buttonIconVariants }
export type { ButtonVariants, ButtonIconVariants }
