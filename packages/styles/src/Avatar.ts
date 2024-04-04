import { tv, type VariantProps } from 'tailwind-variants'

const avatarVariants = tv({
	slots: {
		container: 'relative z-0 group aspect-square flex-center rounded-md overflow-hidden hover:brightness-125 focus:brightness-125 transition-all',
		imgStyles: 'w-full h-full object-cover',
		textStyles: 'text-sm font-medium select-none',
		uploadStyles:
			'absolute z-10 inset-0 flex-center text-text-ghost/100 hidden group-hover:flex cursor-pointer',
	},
	variants: {
		size: {
			xs: { container: 'h-9  text-xs rounded-md' },
			sm: { container: 'h-10 text-sm rounded-md' },
			md: { container: 'h-11 text-sm rounded-md' },
			lg: { container: 'h-12 text-base rounded-lg' },
			xl: { container: 'h-14 text-base rounded-lg' },
		},
		color: {
			default: {
				container: 'bg-content3 text-text-ghost ring-border',
				uploadStyles: 'text-text-ghost/100',
			},
			foreground: {
				container: 'bg-foreground/100 text-foreground/100 ring-foreground/100',
				uploadStyles: 'bg-foreground/100 text-text-foreground/100',
			},

			info: {
				container: 'text-tag-blue bg-tag-blue/20 ring-tag-blue',
				uploadStyles: 'bg-tag-blue/20 text-tag-blue',
			},
			error: {
				container: 'text-tag-red bg-tag-red/20 ring-tag-red',
				uploadStyles: 'bg-tag-red/20 text-tag-red',
			},
			success: {
				container: 'text-tag-green bg-tag-green/20 ring-tag-green',
				uploadStyles: 'bg-tag-green/20 text-tag-green',
			},
			warning: {
				container: 'text-tag-yellow bg-tag-warning/20 ring-tag-yellow',
				uploadStyles: 'bg-tag-warning/20 text-tag-yellow',
			},
		},

		disabled: {
			true: { container: 'opacity-50 cursor-not-allowed' },
		},
		rounded: {
			true: { container: 'rounded-full' },
			false: { container: 'rounded-md' },
		},
		bordered: {
			true: { container: 'bg-transparent border-2 border-background ring-2' },
			false: { container: 'border-0 ring-0' },
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',

		rounded: false,
		disabled: false,
		bordered: false,
	},
})

type AvatarVariants = VariantProps<typeof avatarVariants>

export { avatarVariants }
export type { AvatarVariants }
