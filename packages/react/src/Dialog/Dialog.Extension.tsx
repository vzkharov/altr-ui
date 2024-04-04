import { memo, useCallback } from 'react'

import { clsx } from '@altrui/core/utils'
import type { ReactPropsOf } from '@altrui/core/utils'

import { Hint, Title, type TextProps } from '../Text'
import { CloseButton, type ButtonProps } from '../Button'

import { useDialogContext } from './context'

const DialogTitle = ({ className, ...props }: TextProps) => (
	<Title
		lineClamp={1}
		className={clsx('w-[90%] mb-1', className)}
		{...props}
	/>
)

const DialogDescription = ({ className, ...props }: TextProps) => (
	<Hint
		className={clsx('text-left', className)}
		{...props}
	/>
)

const DialogBody = ({ className, style, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx(
			'w-full overflow-y-scroll overflow-x-auto my-5 text-base text-gray-1',
			className,
		)}
	/>
)

const DialogFooter = ({ className, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx('mt-auto', className)}
	/>
)

const DialogHeader = ({ className, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx('flex items-center justify-between gap-x-1', className)}
	/>
)

const DialogCloseButton = memo<ButtonProps>(
	({ onClick, size = 'xs', color = 'default', variant = 'solid', ...props }) => {
		const { onClose } = useDialogContext()

		const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
			(event) => {
				onClose()
				onClick?.(event)
			},
			[onClose],
		)

		return (
			<CloseButton
				{...props}
				size={size}
				color={color}
				variant={variant}
				onClick={handleClick}
			/>
		)
	},
)

export { DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogCloseButton }
