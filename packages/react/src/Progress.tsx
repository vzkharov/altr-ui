import { memo } from 'react'
import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { progressVariants, type ProgressVariants } from '@altrui/styles'

type ProgressProps = MergeWithHTMLProps<
	'div',
	ProgressVariants & {
		value: string | number
	}
>

const Progress = memo<ProgressProps>(
	({ value, style, className, color = 'default', animated = false, ...props }) => {
		const { container, bar } = progressVariants({ color, animated })
		return (
			<div
				{...props}
				style={style}
				className={container({ className })}
			>
				<div
					style={{ width: `${value}%` }}
					className={bar({ className })}
				/>
			</div>
		)
	},
)

export { Progress }
export type { ProgressProps }
