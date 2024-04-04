import { memo, forwardRef } from 'react'
import type { MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Text, type TextProps } from './Text'

type LabelProps = MergeWithHTMLProps<
	'label',
	TextProps & {
		required?: boolean
	}
>

const REQUIRED_SYMBOL = '*'

const Label = memo(
	forwardRef<HTMLInputElement, LabelProps>(
		({ as, children, required = false, ...textProps }, ref) => (
			<Text
				as="label"
				ref={ref}
				children={
					required ? (
						<>
							{children}
							<span className="!text-tag-red">
								{REQUIRED_SYMBOL}
							</span>
						</>
					) : (
						children
					)
				}
				{...textProps}
			/>
		),
	),
)

export { Label }
export type { LabelProps }
