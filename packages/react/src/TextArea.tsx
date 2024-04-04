'use client'

import { memo, forwardRef, useState } from 'react'
import { clsx } from '@altrui/core/utils'

import { Hint } from './Text'
import { LoadingCircle } from './Loading'
import { Input, type InputProps } from './Input'

type TextAreaProps = InputProps<'textarea'>

const TextArea = memo(
	forwardRef<HTMLTextAreaElement, TextAreaProps>(
		(
			{
				error,
				color,
				value,
				loading,
				onChange,
				className,
				maxLength,
				minLength,
				initialValue,
				...props
			},
			ref,
		) => {
			const [valueLength, setValueLength] = useState<number>(
				initialValue?.length || value?.length || 0,
			)

			const handleChange = (newValue: string) => {
				setValueLength(newValue.length)
				onChange?.(newValue)
			}

			const hintColor = !color || color === 'default' ? 'ghost' : color
			const isValueLimitCorrect =
				(maxLength ? valueLength <= maxLength : true) &&
				(minLength ? valueLength >= minLength : true)

			return (
				/** @fix */
				// @ts-expect-error
				<Input
					{...props}
					ref={ref}
					as="textarea"
					value={value}
					color={color}
					minLength={minLength}
					maxLength={maxLength}
					onChange={handleChange}
					error={error || !isValueLimitCorrect}
					initialValue={initialValue}
					className={clsx(
						'h-[unset] py-3 [&>*]:resize-none',
						className,
					)}
					iconRight={
						<div className="absolute bottom-0 right-0 select-none">
							{loading ? (
								<LoadingCircle />
							) : (
								<Hint
									color={
										isValueLimitCorrect
											? hintColor
											: 'error'
									}
									className="text-sm rounded-md px-3 py-2 bg-transparent"
								>
									{valueLength}
									{maxLength
										? `/${maxLength}`
										: ''}
								</Hint>
							)}
						</div>
					}
				/>
			)
		},
	),
)

export { TextArea }
export type { TextAreaProps }
