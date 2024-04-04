import { forwardRef, memo } from 'react'

import { Text, type TextProps } from './(defaults)'

const Label = memo(
	forwardRef<Text, TextProps>(({ style, children, ...props }, ref) => (
		<Text
			{...props}
			ref={ref}
			style={style}
			className="mb-2"
		>
			{children}
		</Text>
	)),
)

export { Label }
