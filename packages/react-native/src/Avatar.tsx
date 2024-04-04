import { tv, type VariantProps } from 'tailwind-variants'

import { Text, View } from './(defaults)'

import type { StyleProps } from './types'

type AvatarProps = StyleProps &
	AvatarVariants & {
		src?: string | null | undefined
		text?: string | null | undefined
	}

const Avatar = ({ src, text, style, className, size = 'md', rounded = false }: AvatarProps) => {
	const {
		container,
		textStyles,
		avatarStyles: _avatarStyles,
	} = avatarVariants({ size, rounded, className })

	return (
		<View
			style={style}
			className={container()}
		>
			<Text className={textStyles()}>{text?.slice(0, 2)}</Text>
		</View>
	)
}

const avatarVariants = tv({
	slots: {
		container: 'aspect-square bg-content4 flex-center',

		textStyles: 'text-text-default font-semibold uppercase',
		avatarStyles: '',
	},
	variants: {
		size: {
			xs: {
				container: 'w-8 rounded-xs',
				textStyles: 'text-xs',
			},
			sm: {
				container: 'w-10 rounded-xs',
				textStyles: 'text-sm',
			},
			md: {
				container: 'w-12 rounded-xs',
				textStyles: 'text-base',
			},
			lg: {
				container: 'w-14 rounded-sm',
				textStyles: 'text-base',
			},
			xl: {
				container: 'w-16 rounded-md',
				textStyles: 'text-lg',
			},
		},
		rounded: {
			true: {
				container: 'rounded-full',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		rounded: false,
	},
})

type AvatarVariants = VariantProps<typeof avatarVariants>

export { Avatar }
export type { AvatarProps }
