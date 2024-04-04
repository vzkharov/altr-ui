import { memo } from 'react'

import { clsx, type MergeWithHTMLProps } from '@altrui/core/utils'

type SkeletonComponentProps = MergeWithHTMLProps<
	'div',
	Partial<{
		width: string | number
		height: string | number

		disableAnimation: boolean
	}>
>

type SkeletonProps = SkeletonComponentProps & {
	count?: number

	gap?: string | number
}

const SkeletonComponent = memo<SkeletonComponentProps>(
	({ style, width, height, className, disableAnimation = false, ...props }) => (
		<div
			{...props}
			style={{ width, height, ...style }}
			className={clsx(
				'w-full h-full select-none bg-content3 rounded-md',
				!disableAnimation ? 'animate-skeleton' : '',
				className,
			)}
		/>
	),
)

const Skeleton = memo<SkeletonProps>(({ gap, style, className, count = 1, ...props }) => {
	if (count >= 1) {
		return (
			<div
				className={className}
				style={{ gap, ...style }}
			>
				{new Array(count).fill(0).map((_, key) => (
					<SkeletonComponent
						key={key}
						{...props}
					/>
				))}
			</div>
		)
	}

	return (
		<SkeletonComponent
			{...props}
			style={style}
			className={className}
		/>
	)
})

export { Skeleton }
export type { SkeletonProps }
