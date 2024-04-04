import { tv, type VariantProps } from 'tailwind-variants'

const chipVariants = tv({
	base: 'w-fit h-fit flex items-center rounded-md font-normal select-none',
	variants: {
		variant: {
			solid: '',
			outlined: '!bg-transparent border-2',
			shadow: 'bg-opacity-10',
			light: '!bg-transparent',
		},
		color: {
			default: 'bg-content4 border-border text-text-ghost',
			foreground: 'bg-foreground/100 border-foreground/100 text-text-foreground/100',

			info: 'bg-tag-blue text-tag-blue border-tag-blue',
			error: 'bg-tag-red text-tag-red border-tag-red',
			success: 'bg-tag-green text-tag-green border-tag-green',
			warning: 'bg-tag-yellow text-tag-yellow border-tag-yellow',
		},
		size: {
			xs: 'text-xs px-2 py-1   gap-x-1.5 rounded-sm',
			sm: 'text-sm px-2 py-1   gap-x-1.5 rounded-sm',
			md: 'text-md px-3 py-1   gap-x-2   rounded-md',
			lg: 'text-lg px-3 py-1   gap-x-2.5 rounded-md',
			xl: 'text-xl px-4 py-2   gap-x-3   rounded-lg',
		},

		disabled: {
			true: 'opacity-50 cursor-not-allowed',
			false: 'cursor-default',
		},
		gradient: {
			true: 'bg-gradient-to-r from-gradient-start to-gradient-end !text-dark !font-semibold',
		},
	},
	defaultVariants: {
		size: 'md',
		variant: 'solid',

		disabled: false,
		gradient: false,
	},
	compoundVariants: [
		{
			variant: 'solid',
			color: 'info',
			className: 'text-white',
		},
		{
			variant: 'solid',
			color: 'error',
			className: 'text-white',
		},
		{
			variant: 'solid',
			color: 'warning',
			className: 'text-black',
		},
		{
			variant: 'solid',
			color: 'success',
			className: 'text-black',
		},

		{
			variant: 'shadow',
			color: 'default',
			className: 'bg-content1 text-text-ghost/100',
		},
	],
})

type ChipVariants = VariantProps<typeof chipVariants>

export { chipVariants, type ChipVariants }
