'use client'

import { memo, forwardRef, type MouseEventHandler } from 'react'
import { clsx } from '@altrui/core/utils/clsx'

import { usePopoverContext } from '../Popover'
import { ButtonAction, type ButtonProps } from '../Button'

type MenuItemProps = ButtonProps & {
	preventClose?: boolean
}

const MenuItem = memo(
	forwardRef<HTMLButtonElement, MenuItemProps>(
		(
			{
				color,
				onClick,
				className,
				size = 'sm',
				preventClose: internalPreventClose = false,
				...props
			},
			ref,
		) => {
			const { close, preventClose: globalPreventClose } = usePopoverContext()

			const preventClose = internalPreventClose || globalPreventClose

			const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
				if (preventClose) {
					return
				}
				onClick?.(event)
				close?.()
			}

			return (
				<ButtonAction
					{...props}
					full
					ref={ref}
					size={size}
					color={color}
					riple={preventClose}
					onClick={handleClick}
					className={clsx(
						'gap-x-3 font-normal',
						!color
							? 'text-text-ghost hover:text-gray-900 focus:text-gray-900'
							: '',
						className,
					)}
				/>
			)
		},
	),
)

export { MenuItem }
export type { MenuItemProps }
