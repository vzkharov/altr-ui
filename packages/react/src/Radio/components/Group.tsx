'use client'

import { memo, forwardRef, useId } from 'react'

import { useControlledValue } from '@altrui/core/hooks'
import { radioGroupVariants, type RadioGroupVariants } from '@altrui/styles'
import type { ArrowFunction, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Label } from '../../Text'

import { RadioContext } from '../context'
import type { RadioBaseProps } from '../types'

type RadioGroupProps = MergeWithHTMLProps<
	'fieldset',
	RadioBaseProps &
		RadioGroupVariants &
		Partial<{
			required: boolean

			hint: string
			label: string

			value: string
			initialValue: string

			onChange: ArrowFunction<[string]>
		}>
>

const RadioGroup = memo(
	forwardRef<HTMLFieldSetElement, RadioGroupProps>(
		(
			{
				id,
				hint,
				label,
				value,
				children,
				onChange,
				className,
				initialValue,
				dir = 'x',
				size = 'md',
				color = 'info',
				required = false,
				readOnly = false,
				...props
			},
			ref,
		) => {
			const internalId = useId()
			const [selectedValue, setSelectedValue] = useControlledValue({
				value,
				readOnly,
				onChange,
				initialValue,
			})

			return (
				<RadioContext.Provider
					value={{
						size,
						color,
						readOnly,
						selectedValue,
						setSelectedValue,
						id: id || internalId,
					}}
				>
					<fieldset
						id={id}
						ref={ref}
						className="space-y-1"
						defaultValue={initialValue}
						{...props}
					>
						<Label
							as="span"
							className="ml-1"
							required={required}
						>
							{label}
						</Label>
						<div
							className={radioGroupVariants({
								dir,
								size,
								className,
							})}
						>
							{children}
						</div>
					</fieldset>
				</RadioContext.Provider>
			)
		},
	),
)

export { RadioGroup }
export type { RadioGroupProps }
