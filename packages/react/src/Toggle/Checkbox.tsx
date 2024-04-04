'use client'

import { memo, forwardRef, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { CheckIcon } from '@altrui/core/icons'
import { useCheckbox } from '@altrui/core/hooks'
import { checkboxVariants, type CheckboxVariant } from '@altrui/styles'
import { TRANSITION_VARIANTS, type MergeWithHTMLProps } from '@altrui/core/utils'

import { Hint, Text } from '../Text'
import { VisuallyHidden } from '../VisuallyHidden'

import type { ToggleBaseProps } from './types'

type CheckboxProps = MergeWithHTMLProps<
	'input',
	ToggleBaseProps & CheckboxVariant & { indeterminate?: boolean }
>

const Checkbox = memo(
	forwardRef<HTMLInputElement, CheckboxProps>(
		(
			{
				icon,
				name,
				label,
				value,
				onChange,
				className,
				description,
				id: externalId,
				containerClassName,
				size = 'md',
				color = 'default',
				disabled = false,
				readOnly = false,
				initialValue = false,
				...props
			},
			ref,
		) => {
			const internalId = useId()
			const id = externalId || internalId

			const {
				checked,
				onClick,
				clickable,
				onChange: changeHandler,
			} = useCheckbox({
				value,
				onChange,
				readOnly,
				disabled,
				initialValue,
			})

			const {
				container,
				inner,
				thumb,
				labels,
				icon: iconStyles,
			} = checkboxVariants({
				size,
				color,
				disabled,
				clickable,
			})

			return (
				<div
					onClick={onClick}
					className={container({ className: containerClassName })}
				>
					<VisuallyHidden>
						<input
							ref={ref}
							id={id}
							type="checkbox"
							className="sr-only"
							name={name}
							checked={checked}
							disabled={disabled}
							readOnly={readOnly}
							onChange={changeHandler}
							{...props}
						/>
					</VisuallyHidden>

					<div className={inner({ className })}>
						<AnimatePresence initial={checked}>
							{checked ? (
								<motion.span
									exit="exit"
									initial="exit"
									animate="enter"
									className={thumb()}
									key={`checkbox-thumb-${id}`}
									variants={
										TRANSITION_VARIANTS.scaleSpringOpacity
									}
								/>
							) : null}

							<div className={iconStyles()}>
								{checked ? (
									<motion.span
										exit="exit"
										initial="exit"
										animate="enter"
										key={`checkbox-icon-${id}`}
										variants={
											TRANSITION_VARIANTS.scaleFadeIn
										}
									>
										{icon || (
											<CheckIcon
												checked={
													checked
												}
											/>
										)}
									</motion.span>
								) : null}
							</div>
						</AnimatePresence>
					</div>

					{label || description ? (
						<label
							form={id}
							className={labels()}
						>
							<Text>{label}</Text>
							<Hint lineClamp={1}>{description}</Hint>
						</label>
					) : null}
				</div>
			)
		},
	),
)

export { Checkbox }
export type { CheckboxProps }
