'use client'

import { memo, forwardRef } from 'react'

import { optionContainerVariants } from '@altrui/styles'
import type { ReactChildren, ArrowFunction, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Text } from '../../Text'
import { VisuallyHidden } from '../../VisuallyHidden'

import { useRadioContext, type RadioConfig } from '../context'

type RadioOptionChildren = ArrowFunction<
	[RadioConfig & { checked: boolean; disabled: boolean }],
	ReactChildren
>

type RadioOptionProps = MergeWithHTMLProps<
	'div',
	{
		value: string
		disabled?: boolean
		children: RadioOptionChildren

		hint?: string
		label?: string
	}
>

const RadioOption = memo(
	forwardRef<HTMLInputElement, RadioOptionProps>(
		({ value, label, children, className, disabled = false, ...props }, ref) => {
			const ctx = useRadioContext()

			const checked = ctx.selectedValue === value

			return (
				<label>
					<VisuallyHidden>
						<input
							ref={ref}
							id={value}
							name={ctx.id}
							type="radio"
							value={value}
							checked={checked}
							disabled={disabled}
							onChange={() =>
								ctx.setSelectedValue?.(value)
							}
						/>
					</VisuallyHidden>
					<div
						{...props}
						onClick={() => ctx.setSelectedValue?.(value)}
						className={optionContainerVariants({
							className,
							clickable: !ctx.readOnly && !disabled,
							...ctx,
						})}
					>
						{children({ checked, disabled, ...ctx })}
						{label ? <Text>{label}</Text> : null}
					</div>
				</label>
			)
		},
	),
)

export { RadioOption }
export type { RadioOptionProps }
