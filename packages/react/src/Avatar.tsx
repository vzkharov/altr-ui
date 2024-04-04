import { memo, forwardRef, useMemo } from 'react'

import { UserIcon, UploadIcon } from '@altrui/core/icons'
import { avatarVariants, type AvatarVariants } from '@altrui/styles'
import type { ArrowFunction, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Skeleton } from './Skeleton'

type AvatarProps = MergeWithHTMLProps<
	'div',
	AvatarVariants &
		Partial<{
			src: string | null
			text: string | null

			loading: boolean
			uploaded: boolean

			children: never

			onUpload: ArrowFunction
		}>
>

const Avatar = memo(
	forwardRef<HTMLDivElement, AvatarProps>(
		(
			{
				src,
				text,
				style,
				onUpload,
				className,
				size = 'md',
				rounded = false,
				loading = false,
				disabled = false,
				bordered = false,
				uploaded = false,
				color = 'default',
				...props
			},
			ref,
		) => {
			const { container, imgStyles, textStyles, uploadStyles } = avatarVariants({
				size,
				color,
				rounded,
				disabled,
				bordered,
				className,
			})

			if (loading) {
				return (
					<Skeleton
						style={style}
						className={container({ className })}
					/>
				)
			}

			const children = useMemo(() => {
				if (src) {
					return (
						<img
							src={src}
							alt="avatar"
							className={imgStyles()}
						/>
					)
				}

				if (text) {
					return (
						<h6 className={textStyles()}>
							{text.slice(0, 1).toUpperCase()}
						</h6>
					)
				}

				return (
					<UserIcon
						className={textStyles({
							className: 'p-2 w-full h-full',
						})}
					/>
				)
			}, [src, text, uploaded])

			return (
				<div
					ref={ref}
					style={style}
					className={container({ className })}
					{...props}
				>
					{uploaded ? (
						<UploadIcon
							className={uploadStyles()}
							size={size ? Number(size) / 3 : undefined}
						/>
					) : null}
					{children}
				</div>
			)
		},
	),
)

export { Avatar }
export type { AvatarProps }
