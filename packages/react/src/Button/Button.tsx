'use client'

import { memo, forwardRef, useRef, type MouseEvent, useState } from 'react'

import { DotsIcon } from '@altrui/core/icons'
import { mergeRef } from '@altrui/core/helpers/refs'
import { buttonVariants, type ButtonVariants } from '@altrui/styles'
import type { ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Drip, useDrip } from '../Drip'

type ButtonProps = MergeWithHTMLProps<
	'button',
	ButtonVariants &
		Partial<{
			riple: boolean

			iconLeft: ReactChildren
			iconRight: ReactChildren

			onClickAsync: <T = unknown>(
				event: MouseEvent<HTMLButtonElement>,
			) => Promise<unknown>
		}>
>

const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		(
			{
				full,
				auto,
				disabled,
				onClick,
				children,
				iconLeft,
				iconRight,
				className,
				onClickAsync,
				loading: externalLoading,
				size = 'md',
				riple = true,
				type = 'button',
				color = 'default',
				variant = 'solid',
				gradient = false,
				...props
			},
			externalRef,
		) => {
			const localRef = useRef<HTMLButtonElement>(null)
			const ref = mergeRef([externalRef, localRef])

			const [localLoading, setLocalLoading] = useState<boolean>(
				externalLoading || false,
			)
			const loading = localLoading || externalLoading

			const { onClick: onDripClickHandler, ...dripBindings } = useDrip({
				ref: localRef,
			})

			const clickable = !(loading || disabled)

			const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
				if (!clickable) {
					return null
				}

				onDripClickHandler(event)

				if (onClickAsync) {
					setLocalLoading(true)
					onClickAsync(event).finally(() => setLocalLoading(false))
				}

				onClick?.(event)
			}

			return (
				<button
					ref={ref}
					type={type}
					onClick={handleClick}
					disabled={!clickable}
					className={buttonVariants({
						auto,
						full,
						size,
						color,
						variant,
						loading,
						gradient,
						disabled,
						className,
					})}
					{...props}
				>
					{loading ? (
						<DotsIcon />
					) : (
						<>
							{iconLeft}
							{children}
							{iconRight}
						</>
					)}

					{riple ? <Drip {...dripBindings} /> : null}
				</button>
			)
		},
	),
)

Button.displayName = '@altrui/Button'

export { Button }
export type { ButtonProps }
