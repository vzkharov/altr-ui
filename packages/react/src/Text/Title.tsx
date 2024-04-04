import { memo, forwardRef } from 'react'
import { clsx } from '@altrui/core/utils/clsx'

import { Text, type TextProps } from './Text'

const Title = memo(
	forwardRef<HTMLElement, TextProps>(({ className, as = 'h2', ...props }, ref) => (
		<Text
			as={as}
			ref={ref}
			className={clsx('text-2xl font-semibold', className)}
			{...props}
		/>
	)),
)

export { Title }
