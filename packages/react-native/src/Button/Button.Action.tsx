import { memo } from 'react'

import { Spacer } from '../Spacer'

import { Button, type ButtonProps } from './Button'

const ButtonAction = memo(({ children, iconLeft, iconRight, style, ...props }: ButtonProps) => (
	<Button
		{...props}
		style={style}
		className="justify-start px-6"
		iconLeft={iconLeft}
		iconRight={
			<>
				<Spacer full />
				{iconRight}
			</>
		}
	>
		{children}
	</Button>
))

export { ButtonAction }
