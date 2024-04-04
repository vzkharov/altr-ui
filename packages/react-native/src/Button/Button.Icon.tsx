import { memo } from 'react'

import type { ReactChildren } from '../types'

import { Button, type ButtonProps } from './Button'

type ButtonIconProps = Omit<ButtonProps, 'iconLeft' | 'iconRight' | 'children'> & {
	icon: ReactChildren
}

const ButtonIcon = memo(({ icon, style, ...props }: ButtonIconProps) => (
	<Button
		{...props}
		style={style}
		className="justify-start px-6"
	>
		{icon}
	</Button>
))

export { ButtonIcon }
export type { ButtonIconProps }
