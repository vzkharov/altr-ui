import { memo } from 'react'

import { clsx } from '@altrui/core/utils'
import { CloseIcon } from '@altrui/core/icons'

import { ButtonIcon, type ButtonIconProps } from './Button.Icon'

const CloseButton = memo(({ className, ...props }: ButtonIconProps) => (
	<ButtonIcon
		variant="light"
		{...props}
		icon={<CloseIcon />}
		className={clsx('', className)}
	/>
))

export { CloseButton }
