import { memo } from 'react'

import { Skeleton as MotiSkeleton } from 'moti/skeleton'

import { useTheme } from './theme'

type SkeletonProps = Parameters<typeof MotiSkeleton>[0]

type SkeletonTransition = Exclude<SkeletonProps['transition'], undefined>

const Skeleton = memo<SkeletonProps>((props) => {
	const { theme, colors } = useTheme()
	return (
		<MotiSkeleton
			width="100%"
			colorMode={theme}
			radius={20}
			{...props}
			backgroundColor={colors.background}
			transition={{ duration: 0.1 }}
			colors={[colors.gray[300], colors.gray[400], colors.gray[500]]}
		/>
	)
})

type SkeletonGroupProps = Parameters<typeof MotiSkeleton.Group>[0]

const SkeletonGroup = memo<SkeletonGroupProps>((props) => {
	return <MotiSkeleton.Group {...props} />
})

export { Skeleton, SkeletonGroup }
export type { SkeletonProps, SkeletonGroupProps }
