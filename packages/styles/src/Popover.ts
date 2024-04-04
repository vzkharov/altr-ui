import { tv, type VariantProps } from 'tailwind-variants'

const popoverTriggerVariants = tv({
	base: 'w-fit h-fit',
})

const popoverContentVariants = tv({
	base: 'absolute z-40 w-fit h-fit p-2 rounded-md backdrop-blur-lg',
	variants: {
		color: {
			default: 'bg-content2/80 text-text-default shadow-2xl shadow-background/50',
			foreground: 'bg-foreground text-text-foreground',

			info: 'bg-tag-blue text-white',
			error: 'bg-tag-red text-black',
			success: 'bg-tag-green text-black',
			warning: 'bg-tag-yellow text-black',
		},
		position: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
		align: {
			center: '',
			start: 'left-0',
			end: 'right-0',
		},
		full: {
			true: 'w-full',
			false: '',
		},
	},
	defaultVariants: {
		align: 'end',
		color: 'default',
		position: 'bottom',
		full: false,
	},
})

type PopoverVariants = VariantProps<typeof popoverContentVariants> &
	VariantProps<typeof popoverTriggerVariants>

export { popoverTriggerVariants, popoverContentVariants }
export type { PopoverVariants }
