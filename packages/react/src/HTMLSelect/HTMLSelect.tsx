import { memo, forwardRef } from 'react'
import { MergeWithHTMLProps } from '@altrui/core/utils'

type HTMLSelectProps = MergeWithHTMLProps<
	'select',
	{
		onChange?: (value: string) => unknown
	}
>

const HTMLSelect = memo(
	forwardRef<HTMLSelectElement, HTMLSelectProps>(({ onChange, children, ...props }, ref) => (
		<select
			{...props}
			ref={ref}
			onChange={(e) => onChange?.(e.currentTarget.value)}
		>
			{children}
		</select>
	)),
)

export { HTMLSelect }
export type { HTMLSelectProps }
