import { tv, type VariantProps } from 'tailwind-variants'

const tooltipVariants = tv({
	base: 'w-max py-1.5 px-5 flex-center text-sm font-normal text-center rounded-md select-none',
	variants: {
		variant: {
			solid: 'bg-opacity-100',
			outlined: 'border-1.5 bg-opacity-0',
			shadow: 'bg-opacity-10',
			light: 'bg-opacity-0',
		},
		color: {
			default: 'bg-content3 text-text-default',
			ghost: 'bg-content2 border-border text-text-ghost',
			info: 'bg-tag-blue border-tag-blue text-tag-blue',
			error: 'bg-tag-red border-tag-red text-tag-red',
			success: 'bg-tag-green border-tag-green text-tag-green',
			warning: 'bg-tag-yellow border-tag-yellow text-tag-yellow',

			foreground: 'bg-foreground border-foreground text-text-foreground',
		},

		gradient: {
			true: '!bg-gradient !font-semibold !text-black enabled:hover:!opacity-90',
		},
	},
	defaultVariants: {
		color: 'default',
		variant: 'solid',

		gradient: false,
	},
	compoundVariants: [
		{
			variant: 'solid',
			className: 'text-black',
		},
		{
			variant: 'solid',
			color: 'default',
			className: 'text-text-default',
		},
		{
			variant: 'solid',
			color: 'ghost',
			className: 'text-text-ghost',
		},

		{
			variant: 'shadow',
			color: ['default', 'ghost'],
			className: 'bg-content2/100',
		},
	],
})

type TooltipVariants = VariantProps<typeof tooltipVariants>

export { tooltipVariants }
export type { TooltipVariants }
