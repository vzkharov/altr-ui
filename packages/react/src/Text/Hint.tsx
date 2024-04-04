import { memo, forwardRef } from 'react'

import { Text, type TextProps } from './Text'

const Hint = memo(
	forwardRef<HTMLElement, TextProps>((props, ref) => (
		<Text
			ref={ref}
			color="ghost"
			{...props}
		/>
	))
)

export { Hint }
