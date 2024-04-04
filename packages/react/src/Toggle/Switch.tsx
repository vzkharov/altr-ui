'use client'

import { memo, forwardRef, useId } from 'react'
import { motion } from 'framer-motion'

import { useCheckbox } from '@altrui/core/hooks'
import { slideTransition } from '@altrui/core/utils/framer-motion'
import { switchVariants, type SwitchVariants } from '@altrui/styles'
import type { ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils/types'

import { Hint, Text } from '../Text'
import { VisuallyHidden } from '../VisuallyHidden'

import type { ToggleBaseProps } from './types'

type SwitchProps = MergeWithHTMLProps<
	'input',
	ToggleBaseProps &
		SwitchVariants &
		Partial<{
			contentLeft: ReactChildren
			contentRight: ReactChildren
		}>
>

const Switch = memo(
	forwardRef<HTMLInputElement, SwitchProps>(
		(
			{
				icon,
				name,
				label,
				value,
				onChange,
				className,
				description,
				contentLeft,
				contentRight,
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
				readOnly,
				onChange,
				disabled,
				initialValue,
			})

			const {
				inner,
				thumb,
				labels,
				container,
				contentLeft: contentLeftStyles,
				contentRight: contentRightStyles,
			} = switchVariants({ size, color, checked, disabled, clickable })

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
						<span className={contentLeftStyles()}>
							{contentLeft}
						</span>
						<span className={contentRightStyles()}>
							{contentRight}
						</span>

						<motion.div
							layout
							aria-hidden="true"
							className={thumb()}
							key={`switch-thumb-${id}`}
							transition={slideTransition}
						>
							{icon}
						</motion.div>
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

export { Switch }
export type { SwitchProps }
