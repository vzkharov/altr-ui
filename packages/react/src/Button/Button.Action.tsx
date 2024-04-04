import { memo, forwardRef } from 'react'
import { clsx } from '@altrui/core/utils/clsx'

import { Spacer } from '../Spacer'

import { Button, type ButtonProps } from './Button'

const ButtonAction = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		(
			{
				iconLeft,
				iconRight,
				className,
				size = 'xs',
				full = true,
				riple = false,
				variant = 'light',
				...props
			},
			ref,
		) => (
			<Button
				{...props}
				ref={ref}
				size={size}
				full={full}
				riple={riple}
				variant={variant}
				className={clsx(
					'flex items-center gap-x-3 !text-left !justify-start px-2 !font-medium enabled:active:scale-100',
					className,
				)}
				iconLeft={iconLeft}
				iconRight={
					iconRight && (
						<>
							<Spacer full />
							{iconRight}
						</>
					)
				}
			/>
		),
	),
)

ButtonAction.displayName = '@altrui/ButtonAction'

export { ButtonAction }
