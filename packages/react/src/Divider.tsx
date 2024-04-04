import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { dividerVariants, type DividerVariants } from '@altrui/styles'

type DividerProps = MergeWithHTMLProps<
	'div',
	DividerVariants & {
		children?: never
	}
>

const Divider = ({ className, dir = 'x', color = 'default', ...props }: DividerProps) => (
	<div
		{...props}
		className={dividerVariants({ dir, color, className })}
	/>
)

export { Divider }
export type { DividerProps }
