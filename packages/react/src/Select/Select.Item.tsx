'use client'

import { memo, forwardRef, type MouseEventHandler } from 'react'

import { clsx } from '@altrui/core/utils/clsx'
import { CheckIcon } from '@altrui/core/icons'
import type { Suggest } from '@altrui/core/hooks'

import { Hint } from '../Text'
import { MenuItem, type MenuItemProps } from '../Menu'

import { useSelectContext } from './context'

type SelectItemProps = Suggest & Omit<MenuItemProps, 'children'> & { description?: string }

const SelectItem = memo(
	forwardRef<HTMLButtonElement, SelectItemProps>(
		(
			{ id, name, onClick, className, description, disabled = false, ...props },
			ref,
		) => {
			const { selectedItem, setSelected } = useSelectContext()
			const selected = selectedItem?.id === id

			const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
				setSelected?.({ id, name })
				onClick?.(event)
			}

			return (
				<MenuItem
					{...props}
					ref={ref}
					onClick={handleClick}
					variant={selected ? 'shadow' : 'light'}
					iconRight={<CheckIcon checked={selected} />}
					className={clsx(
						'w-full h-unset py-2',
						disabled
							? 'bg-opacity-0 text-muted cursor-not-allowed pointer-events-none'
							: '',
						className,
					)}
				>
					<div className="flex flex-col gap-y-1">
						{name}
						<Hint>{description}</Hint>
					</div>
				</MenuItem>
			)
		},
	),
)

export { SelectItem }
export type { SelectItemProps }
