import { tv, type VariantProps } from 'tailwind-variants'

const textVariants = tv({
	base: 'w-full leading-tight flex-none transition-all',
	variants: {
		color: {
			default: 'text-text-default',
			ghost: 'text-text-ghost',
			foreground: 'text-text-foreground',

			info: 'text-tag-blue',
			error: 'text-tag-red',
			success: 'text-tag-green',
			warning: 'text-tag-yellow',
		},

		lineClamp: {
			none: 'w-fit',
			1: 'line-clamp-1',
			2: 'line-clamp-2',
			3: 'line-clamp-3',
			4: 'line-clamp-4',
			5: 'line-clamp-5',
		},

		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
		},

		truncated: {
			true: 'truncate flex-1 max-w-fit',
			false: '',
		},

		select: {
			true: '',
			false: 'select-none',
		},
		uppercase: {
			true: 'uppercase',
			false: '',
		},
		inline: {
			true: 'inline-block',
		},
		inherit: {
			true: 'text-currentColor',
		},
		disabled: {
			true: 'text-text-muted',
		},
		gradient: {
			true: 'text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end',
		},
	},
	defaultVariants: {
		color: undefined,
		lineClamp: 'none',

		select: true,
		inline: false,
		inherit: false,
		disabled: false,
		gradient: false,
		uppercase: false,
		truncated: false,
	},
	compoundVariants: [],
})

type TextVariants = VariantProps<typeof textVariants>

export { textVariants }
export type { TextVariants }
