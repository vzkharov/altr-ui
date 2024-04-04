import { memo, forwardRef } from 'react'

import { buttonIconVariants, type ButtonIconVariants } from '@altrui/styles'
import type { ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Button } from './Button'

type ButtonIconProps = MergeWithHTMLProps<
	'button',
	ButtonIconVariants &
		Partial<{
			riple: boolean
			icon: ReactChildren
		}>
>

const ButtonIcon = memo(
	forwardRef<HTMLButtonElement, ButtonIconProps>(
		({ icon, className, size = 'xs', full = false, ...props }, ref) => (
			<Button
				{...props}
				auto
				ref={ref}
				size={size}
				full={false}
				className={buttonIconVariants({
					size,
					className,
					fullHeight: full,
					...props,
				})}
			>
				{icon}
			</Button>
		),
	),
)

ButtonIcon.displayName = '@altrui/ButtonIcon'

export { ButtonIcon }
export type { ButtonIconProps }
