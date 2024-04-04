'use client'

import { memo, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { radioVariants } from '@altrui/styles'
import { TRANSITION_VARIANTS } from '@altrui/core/utils/framer-motion'

import { RadioOption, type RadioOptionProps } from './Option'

type RadioDotProps = Omit<RadioOptionProps, 'children'>

const RadioDot = memo(
	forwardRef<HTMLInputElement, RadioDotProps>(({ disabled = false, ...props }, ref) => (
		<RadioOption
			ref={ref}
			disabled={disabled}
			{...props}
		>
			{({ color, size, disabled, checked }) => (
				<AnimatePresence initial={checked}>
					<div
						className={radioVariants({
							color,
							size,
							disabled,
							checked,
						})}
					>
						{checked ? (
							<motion.span
								key={`radio-dot`}
								exit="exit"
								initial="exit"
								animate="enter"
								variants={TRANSITION_VARIANTS.scale}
								className="w-full h-full rounded-full"
							/>
						) : null}
					</div>
				</AnimatePresence>
			)}
		</RadioOption>
	)),
)

export { RadioDot }
export type { RadioDotProps }
