import { DotsIcon, RingsIcon } from '@altrui/core/icons'
import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { loadingVariants, type LoadingVariants } from '@altrui/styles'

type LoadingProps = MergeWithHTMLProps<
	'div',
	LoadingVariants & {
		active?: boolean
		size?: number | string
	}
>

const Loading = ({ size, color, children, className, active = true, ...props }: LoadingProps) => {
	if (!active) {
		return null
	}

	return (
		<div
			{...props}
			className={loadingVariants({ color, className })}
		>
			{children}
		</div>
	)
}

const LoadingDots = ({ size, ...props }: LoadingProps) => (
	<Loading {...props}>
		<DotsIcon size={size} />
	</Loading>
)

const LoadingCircle = ({ size, ...props }: LoadingProps) => (
	<Loading {...props}>
		<RingsIcon size={size} />
	</Loading>
)

export { Loading, LoadingDots, LoadingCircle }
export type { LoadingProps }
