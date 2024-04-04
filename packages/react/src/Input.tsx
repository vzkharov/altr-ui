'use client'

import { memo, forwardRef, useRef, useState } from 'react'
import { mergeRef } from '@altrui/core/helpers'
import { RingsIcon } from '@altrui/core/icons'
import type { As, ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils'

import { inputVariants, type InputVariants } from '@altrui/styles'

import { Hint, Label } from './Text'
import { CloseButton } from './Button'

type Props = InputVariants &
	Partial<{
		loading: boolean
		clearable: boolean

		hint: ReactChildren
		label: ReactChildren

		iconLeft: ReactChildren
		iconRight: ReactChildren

		value: string | null
		initialValue: string | null

		onClear: (value: string) => unknown
		onChange: (value: string) => unknown

		onChangeEvent: React.ChangeEventHandler<HTMLInputElement>
	}>

type InputProps<T extends As = 'input'> = MergeWithHTMLProps<
	T,
	Props & {
		as?: As
	}
>

const Input = memo(
	forwardRef<HTMLElement, InputProps>(
		<T extends As = 'input'>(
			{
				hint,
				label,
				style,
				value,
				onClear,
				onClick,
				required,
				iconLeft,
				iconRight,
				className,
				onChange,
				onChangeEvent,
				initialValue,
				as = 'input',
				size = 'md',
				auto = false,
				full = false,
				error = false,
				loading = false,
				disabled = false,
				readOnly = false,
				color = 'default',
				variant = 'solid',
				clearable = false,
				...props
			}: InputProps<T>,
			externalRef: React.ForwardedRef<HTMLElement>,
		) => {
			const Comp = as || 'input'

			const localRef = useRef<HTMLInputElement>(null)
			const ref = mergeRef([localRef, externalRef])

			const [localState, setLocalState] = useState<string>(
				initialValue || value || '',
			)

			const editable = !(disabled || loading || readOnly)

			const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
				event,
			) => {
				const newValue = event.currentTarget.value

				onChangeEvent?.(event)
				onChange?.(newValue)
				setLocalState(newValue)
			}

			const reset = () => {
				if (!editable || !localRef.current) {
					return null
				}

				onChange?.('')
				setLocalState('')
				onClear?.(localRef.current.value)

				localRef.current.value = ''
			}

			const { container, labels, inner, input, clearButton } = inputVariants({
				auto,
				full,
				size,
				color,
				error,
				variant,
				readOnly,
				disabled,
			})

			return (
				<div className={container({})}>
					{label || hint ? (
						<div className={labels()}>
							<Label required={required}>{label}</Label>
							<Hint
								as="span"
								truncated
								color={error ? 'error' : 'ghost'}
							>
								{hint}
							</Hint>
						</div>
					) : null}

					<div
						style={style}
						onClick={onClick}
						className={inner({ className })}
					>
						{iconLeft}

						<Comp
							{...props}
							ref={ref}
							value={value}
							readOnly={readOnly}
							required={required}
							disabled={disabled}
							className={input()}
							onChange={handleChange}
							defaultValue={initialValue}
						/>

						{clearable && localState && editable ? (
							<CloseButton
								size="xs"
								onClick={reset}
								className={clearButton()}
								variant="shadow"
								color={error ? 'error' : color}
							/>
						) : null}

						{loading ? <RingsIcon /> : null}

						{!loading && iconRight}
					</div>
				</div>
			)
		},
	),
)

export { Input }
export type { InputProps }
