import { memo, forwardRef, type CSSProperties } from 'react'

import type { As, MergeWithHTMLProps } from '@altrui/core/utils'
import { textVariants, type TextVariants } from '@altrui/styles'

type TextProps = MergeWithHTMLProps<
	'p',
	TextVariants &
		Partial<{
			as: As
			renderIfNull: boolean

			size: CSSProperties['fontSize']
			weight: CSSProperties['fontWeight']
		}>
>

const Text = memo(
	forwardRef<HTMLElement, TextProps>(
		(
			{
				as,
				size,
				style,
				color,
				align,
				weight,
				children,
				className,
				select = true,
				inline = false,
				disabled = false,
				gradient = false,
				uppercase = false,
				truncated = false,
				lineClamp = 'none',
				renderIfNull = false,
				...props
			},
			ref,
		) => {
			const Comp = as || 'p'

			if (!children && !renderIfNull) {
				return null
			}

			return (
				<Comp
					{...props}
					ref={ref}
					className={textVariants({
						align,
						color,
						inline,
						select,
						gradient,
						disabled,
						truncated,
						uppercase,
						className,
						lineClamp,
					})}
					style={{ fontSize: size, fontWeight: weight, ...style }}
				>
					{children}
				</Comp>
			)
		},
	),
)

export { Text }
export type { TextProps }
