import { tv, type VariantProps } from 'tailwind-variants'

import { View, Text } from './(defaults)'
import type { StyleProps } from './types'

type ChipProps = StyleProps &
	ChipVariants & {
		children?: React.ReactNode | React.ReactNode[]
	}

const Chip = ({ children, style, size = 'md', color = 'default' }: ChipProps) => {
	const { chip, textStyles } = chipStyles({ size, color })

	return (
		<View
			style={style}
			className={chip()}
		>
			<Text className={textStyles()}>{children}</Text>
		</View>
	)
}

const chipStyles = tv({
	slots: {
		chip: 'whitespace-nowrap',
		textStyles: 'self-start font-medium',
	},
	variants: {
		size: {
			xs: { chip: 'rounded-xs', textStyles: '' },
			sm: { chip: 'rounded-xs', textStyles: 'px-2 py-0.5 text-sm' },
			md: { chip: 'rounded-xs', textStyles: 'px-2.5 py-0.5 text-base' },
			lg: { chip: 'rounded-xs', textStyles: 'px-3 py-1 text-base' },
			xl: { chip: 'rounded-xs', textStyles: '' },
		},
		color: {
			default: {
				chip: 'bg-overlay',
				textStyles: 'text-tag-white',
			},
			info: {
				chip: 'bg-tagShadow-blue',
				textStyles: 'text-tag-blue',
			},
			error: {
				chip: 'bg-tagShadow-red',
				textStyles: 'text-tag-red',
			},
			success: {
				chip: 'bg-tagShadow-green',
				textStyles: 'text-tag-green',
			},
			warning: {
				chip: 'bg-tagShadow-yellow',
				textStyles: 'text-tag-yellow',
			},
		},
	},
	defaultVariants: {
		size: 'md',
		color: 'default',
	},
})

type ChipVariants = VariantProps<typeof chipStyles>

export { Chip }
export type { ChipProps }
