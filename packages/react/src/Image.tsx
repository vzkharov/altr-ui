'use client'

import type { CSSProperties } from 'react'
import RcImage, { ImageProps as RcImageProps } from 'rc-image'
import { clsx } from '@altrui/core/utils/clsx'

import { Skeleton } from './Skeleton'

type ImageProps = RcImageProps &
	Partial<{
		rounded: number | string
		objectFit: CSSProperties['objectFit']
	}>

const Image = ({ className, objectFit, wrapperClassName, rounded = 0, ...props }: ImageProps) => (
	<RcImage
		style={{
			objectFit,
			borderRadius: rounded,
		}}
		placeholder={<Skeleton />}
		className={clsx('w-full h-full', className)}
		wrapperClassName={clsx('overflow-hidden', wrapperClassName)}
		{...props}
	/>
)

export { Image }
export type { ImageProps }
