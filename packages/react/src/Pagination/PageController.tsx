import { memo, forwardRef } from 'react'

import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { pageControllerVariants, type PageControllerVariants } from '@altrui/styles'

type PageControllerProps = MergeWithHTMLProps<'button', PageControllerVariants>

const PageController = memo(
	forwardRef<HTMLButtonElement, PageControllerProps>(
		(
			{
				active,
				className,
				size = 'md',
				shadow = false,
				disabled = false,
				color = 'default',
				...props
			},
			ref,
		) => (
			<button
				{...props}
				ref={ref}
				disabled={disabled}
				className={pageControllerVariants({
					size,
					color,
					shadow,
					active,
					disabled,
					className,
				})}
			/>
		),
	),
)

export { PageController }
export type { PageControllerProps }
