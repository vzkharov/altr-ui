import { tv, type VariantProps } from 'tailwind-variants'

const switchVariants = tv({
	slots: {
		container: 'flex items-center gap-x-4',
		inner: 'relative flex-none flex items-center justify-between rounded-full transition-all',

		thumb: 'h-full aspect-square flex-center bg-white rounded-full',

		contentLeft: 'absolute z-0 transition-all select-none text-text-foreground',
		contentRight: 'absolute z-0 transition-all select-none text-text-ghost',

		labels: 'flex flex-col space-y-1 cursor-[inherit]',
	},
	variants: {
		size: {
			xs: {
				container: 'text-sm',
				inner: 'w-12 h-6 p-[3px]',
				thumb: 'p-1',
				contentLeft: 'left-1',
				contentRight: 'right-1',
			},
			sm: {
				container: 'text-md',
				inner: 'w-14 h-7 p-1',
				thumb: 'p-1',
				contentLeft: 'left-1.5',
				contentRight: 'right-1.5',
			},
			md: {
				container: 'text-lg',
				inner: 'w-16 h-8 p-[5px]',
				thumb: 'p-1.5',
				contentLeft: 'left-1.5',
				contentRight: 'right-1.5',
			},
			lg: {
				container: 'text-lg',
				inner: 'w-[72px] h-9 p-1.5',
				thumb: 'p-2',
				contentLeft: 'left-1.5',
				contentRight: 'right-1.5',
			},
			xl: {
				container: 'text-xl',
				inner: 'w-20 h-10 p-[7px]',
				thumb: 'p-2',
				contentLeft: 'left-2',
				contentRight: 'right-2',
			},
		},
		color: {
			default: { inner: 'bg-tag-blue text-tag-blue' },

			info: { inner: 'bg-tag-blue text-tag-blue' },
			error: { inner: 'bg-tag-red text-tag-red' },
			success: { inner: 'bg-tag-green text-tag-green' },
			warning: { inner: 'bg-tag-yellow text-tag-yellow' },

			foreground: {
				thumb: 'bg-background text-text-default',
				inner: 'bg-foreground text-text-foreground',
			},
		},

		checked: {
			true: {
				inner: 'justify-end text-text-foreground',
				contentLeft: 'opacity-100',
				contentRight: 'opacity-0',
			},
			false: {
				inner: 'bg-overlay/50 text-text-muted justify-start',
				contentLeft: 'opacity-0',
				contentRight: 'opacity-100',
			},
		},
		disabled: {
			true: { container: 'opacity-75' },
		},
		clickable: {
			true: { container: 'cursor-pointer' },
			false: { container: 'cursor-not-allowed' },
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',

		checked: false,
		disabled: false,
		clickable: false,
	},
})

const checkboxVariants = tv({
	slots: {
		container:
			'min-w-0 max-w-full w-max h-fit flex flex-row items-center font-normal transition-all',
		inner: 'flex-none relative group aspect-square overflow-hidden',

		icon: 'aspect-square border-2 text-white flex-center bg-transparent bg-opacity-0 hover:bg-opacity-10 transition-all',
		thumb: 'absolute z-0 inset-0 text-white',
		labels: 'min-w-0 max-w-full ml-4 flex flex-col gap-y-1 font-normal cursor-pointer',
	},
	variants: {
		size: {
			xs: { container: 'text-xs', icon: 'w-5 rounded-sm', thumb: 'rounded-sm' },
			sm: { container: 'text-sm', icon: 'w-6 rounded-sm', thumb: 'rounded-sm' },
			md: { container: 'text-sm', icon: 'w-7 rounded-md', thumb: 'rounded-md' },
			lg: { container: 'text-md', icon: 'w-8 rounded-lg', thumb: 'rounded-lg' },
			xl: { container: 'text-lg', icon: 'w-9 rounded-lg', thumb: 'rounded-lg' },
		},
		color: {
			default: {
				thumb: 'bg-tag-blue',
				icon: 'border-border bg-gray-600',
				labels: 'text-text-default',
			},
			foreground: {
				thumb: 'bg-foreground',
				icon: 'border-foreground text-text-foreground bg-foreground',
			},

			info: {
				thumb: 'bg-tag-blue',
				icon: 'border-tag-blue bg-tag-blue',
				labels: 'text-tag-blue',
			},
			error: {
				thumb: 'bg-tag-red',
				icon: 'border-tag-red bg-tag-red',
				labels: 'text-tag-red',
			},
			success: {
				thumb: 'bg-tag-green',
				icon: 'border-tag-green bg-tag-green',
				labels: 'text-tag-green',
			},
			warning: {
				thumb: 'bg-tag-yellow',
				icon: 'border-tag-yellow bg-tag-yellow',
				labels: 'text-tag-yellow',
			},
		},

		disabled: {
			true: { container: 'opacity-50' },
		},
		clickable: {
			true: { container: 'cursor-pointer' },
			false: { container: 'cursor-not-allowed [&>*]:cursor-not-allowed' },
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',

		disabled: false,
		clickable: true,
	},
})

type SwitchVariants = VariantProps<typeof switchVariants>
type CheckboxVariant = VariantProps<typeof checkboxVariants>

export { switchVariants, checkboxVariants }
export type { SwitchVariants, CheckboxVariant }
