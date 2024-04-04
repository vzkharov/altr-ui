import { tv, type VariantProps } from 'tailwind-variants'

import { View, type ViewProps } from './(defaults)'

type DividerProps = ViewProps & DividerVariants

const Divider = ({ style, dir = 'x', ...props }: DividerProps) => (
	<View
		{...props}
		style={style}
		className={dividerVariants({ dir })}
	/>
)

const dividerVariants = tv({
	base: 'bg-gray-600/10',
	variants: {
		dir: { x: 'h-px', y: 'w-px' },
	},
	defaultVariants: {
		dir: 'x',
	},
})

type DividerVariants = VariantProps<typeof dividerVariants>

export { Divider }
export type { DividerProps }
