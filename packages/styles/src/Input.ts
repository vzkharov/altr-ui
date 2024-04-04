import { tv, type VariantProps } from 'tailwind-variants'

const inputVariants = tv({
	slots: {
		container: 'w-auto flex flex-col text-text-default font-normal',
		labels: 'mx-1 my-2 flex items-center gap-x-4 justify-between select-none',

		inner: 'relative w-full px-3 flex items-center gap-x-4 rounded-md transition-all disabled-within:cursor-not-allowed truncate',

		input: 'appearance-none w-full h-full flex-1 bg-transparent outline-none placeholder:text-text-ghost/100 hover:outline-none focus:outline-none [&>*]:!cursor-[inherit]',
		clearButton: '!h-unset !w-unset !p-1.5 rounded-sm',
	},
	variants: {
		variant: {
			solid: {
				inner: 'border-0',
				input: '',
			},
			outlined: {
				inner: '!bg-transparent border-1.5',
				input: '!text-text-default placeholder:!text-text-muted/100',
			},
		},
		size: {
			xs: {
				container: 'text-sm',
				inner: 'max-w-[256px] h-9  rounded-md px-3 gap-x-3',
				labels: 'text-xs',
			},
			sm: {
				container: 'text-sm',
				inner: 'max-w-[256px] h-10 rounded-md px-3 gap-x-3',
				labels: 'text-xs',
			},
			md: {
				container: 'text-md',
				inner: 'max-w-[320px] h-11 rounded-md px-4 gap-x-4',
				labels: 'text-sm',
			},
			lg: {
				container: 'text-lg',
				inner: 'max-w-[376px] h-12 rounded-lg px-5 gap-x-5',
				labels: 'text-md',
			},
			xl: {
				container: 'text-lg',
				inner: 'max-w-[376px] h-14 rounded-lg px-5 gap-x-5',
				labels: 'text-md',
			},
		},

		color: {
			default: {
				inner: 'bg-content3 border-border hover:border-foreground focus-within:border-foreground',
			},
			foreground: {
				container: 'text-foreground',
				inner: 'bg-foreground/100 border-foreground/100 hover:border-default focus-within:border-default',
				input: 'placeholder:text-text-foreground',
			},

			info: {
				container: 'text-tag-blue',
				inner: 'bg-tag-blue hover:border-tag-blue focus-within:border-tag-blue',
				input: 'placeholder:text-tag-blue',
			},
			error: {
				container: 'text-tag-red',
				inner: 'bg-tag-red hover:border-tag-red focus-within:border-tag-red',
				input: 'placeholder:text-tag-red',
			},
			success: {
				container: 'text-tag-green',
				inner: 'bg-tag-green hover:border-tag-green focus-within:border-tag-green',
				input: 'placeholder:text-tag-green',
			},
			warning: {
				container: 'text-tag-yellow',
				inner: 'bg-tag-yellow hover:border-tag-yellow focus-within:border-tag-yellow',
				input: 'placeholder:text-tag-yellow',
			},
		},

		error: {
			true: {
				labels: 'text-default',
				inner: 'text-tag-red bg-tag-red bg-opacity-20 border-tag-red hover:border-tag-red focus-within:border-tag-red',
				input: ' placeholder:text-tag-red',
			},
		},
		auto: {
			true: {
				inner: 'w-fit h-fit',
				container: 'w-fit h-fit py-1',
			},
		},
		full: {
			true: {
				inner: 'max-w-full',
				container: 'w-full',
			},
		},

		readOnly: {
			true: {
				inner: 'cursor-pointer',
				input: 'cursor-pointer',
			},
		},
		disabled: {
			true: {
				container: 'cursor-not-allowed',
				input: 'text-text-ghost',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',
		variant: 'solid',

		auto: false,
		full: false,
		readOnly: false,
		disabled: false,
	},
	compoundVariants: [
		{
			variant: 'solid',
			color: ['info', 'error', 'success', 'warning'],
			className: {
				inner: 'bg-opacity-[0.15]',
				input: 'placeholder:text-opacity-[0.7]',
			},
		},
	],
})

type InputVariants = VariantProps<typeof inputVariants>

export { inputVariants }
export type { InputVariants }
