import { tv, type VariantProps } from 'tailwind-variants'

const optionContainerVariants = tv({
	base: 'group w-auto h-auto py-2 px-1 flex items-center gap-x-2 cursor-pointer transition-all',
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-md',
			lg: 'text-md',
			xl: 'text-md',
		},
		clickable: {
			true: 'cursor-pointer',
			false: 'cursor-not-allowed',
		},
	},
	defaultVariants: {
		size: 'md',
		clickable: true,
	},
})

const optionVariants = tv({
	base: 'aspect-square rounded-full flex-center transition-all',
	variants: {
		size: { xs: 'h-4', sm: 'h-4', md: 'h-5', lg: 'h-6', xl: 'h-6' },

		readOnly: {
			true: 'cursor-not-allowed',
		},
		disabled: {
			true: 'cursor-not-allowed pointer-events-none',
		},
	},
	defaultVariants: {
		size: 'md',
		readOnly: false,
		disabled: false,
	},
})

const radioVariants = tv({
	extend: optionVariants,
	base: 'flex flex-center border-default border-1.5 group-hover:bg-content-muted focus:scale-95',
	variants: {
		color: {
			default: 'border-tag-blue [&>*]:bg-tag-blue',
			foreground: 'border-foreground [&>*]:bg-foreground',
			info: 'border-tag-blue [&>*]:bg-tag-blue',
			error: 'border-tag-red [&>*]:bg-tag-red',
			success: 'border-tag-green [&>*]:bg-tag-green',
			warning: 'border-tag-yellow [&>*]:bg-tag-yellow',
		},
		size: {
			xs: 'p-[3px]',
			sm: 'p-[3px]',
			md: 'p-1',
			lg: 'p-1.5',
			xl: 'p-1.5',
		},

		checked: {
			true: 'group-hover:bg-transparent',
			false: 'border-border',
		},
		disabled: {
			true: 'opacity-50',
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'info',

		checked: false,
		disabled: false,
	},
})

const radioColorVariants = tv({
	extend: optionVariants,
	base: 'relative overflow-hidden text-black hover:opacity-[0.8]',
})

const radioGroupVariants = tv({
	base: 'flex',
	variants: {
		dir: {
			x: 'w-fit flex-row',
			y: 'h-fit flex-col',
		},

		size: {
			xs: 'text-sm',
			sm: 'text-sm',
			md: 'text-md',
			lg: 'text-md',
			xl: 'text-lg',
		},
	},
	defaultVariants: {
		dir: 'x',
		size: 'md',
	},
})

type RadioVariants = VariantProps<typeof radioVariants>
type OptionVariants = VariantProps<typeof optionVariants>
type RadioColorVariants = VariantProps<typeof radioColorVariants>
type RadioGroupVariants = VariantProps<typeof radioGroupVariants>

export {
	optionVariants,
	radioVariants,
	radioColorVariants,
	radioGroupVariants,
	optionContainerVariants,
}
export type { RadioVariants, OptionVariants, RadioColorVariants, RadioGroupVariants }
