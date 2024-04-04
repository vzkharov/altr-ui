import { forwardRef } from 'react'
import type { ReactPropsOf } from '@altrui/core/utils/types'

const StopPropogation = forwardRef<HTMLDivElement, ReactPropsOf<'div'>>(
	({ onClick, ...props }, ref) => (
		<div
			{...props}
			ref={ref}
			onClick={(event) => {
				event.preventDefault()
				event.stopPropagation()
				return onClick?.(event)
			}}
		/>
	),
)

export { StopPropogation }
