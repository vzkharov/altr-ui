'use client'

import { memo, forwardRef } from 'react'

import { CheckIcon } from '@altrui/core/icons'
import { radioColorVariants } from '@altrui/styles'

import { RadioOption, type RadioOptionProps } from './Option'

type RadioColorProps = Omit<RadioOptionProps, 'children'>

const RadioColor = memo(
	forwardRef<HTMLInputElement, RadioColorProps>(
		({ value, disabled, className, ...props }, ref) => (
			<RadioOption
				ref={ref}
				value={value}
				disabled={disabled}
				{...props}
			>
				{({ checked }) => (
					<span
						ref={ref}
						style={{ backgroundColor: value }}
						className={radioColorVariants({
							disabled,
						})}
					>
						<CheckIcon
							size={12}
							strokeWidth={3}
							checked={checked}
						/>
					</span>
				)}
			</RadioOption>
		),
	),
)

export { RadioColor }
export type { RadioColorProps }
