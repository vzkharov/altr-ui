'use client'

import { memo, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useDialog } from '@altrui/core/hooks'
import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { dialogVariants, type DialogVariants } from '@altrui/styles'
import { TRANSITION_VARIANTS, TRANSTION_TRANSLATES } from '@altrui/core/utils/framer-motion'

import { StopPropogation } from '../StopPropogation'

import { DialogProvider } from './context'

type DialogProps = MergeWithHTMLProps<
	'div',
	DialogVariants &
		Partial<{
			open: boolean
			preventClose: boolean

			blackout: boolean | number

			overflowY: React.CSSProperties['overflowY']

			onChange: (val: boolean) => unknown
		}>
>

const Dialog = memo(
	forwardRef<HTMLDivElement, DialogProps>(
		(
			{
				style,
				onChange,
				children,
				className,
				open = false,
				blackout = false,
				position = 'center',
				overflowY = 'scroll',
				preventClose = false,
				...props
			},
			ref,
		) => {
			const { id, isOpen, clickOutside, set } = useDialog({
				preventClose,
				value: open,
				onChange,
			})

			const { root, panel } = dialogVariants({ position })

			return (
				<DialogProvider
					value={{
						open: isOpen,
						onChange: set,
						onClose: clickOutside,
					}}
				>
					<AnimatePresence initial={false}>
						{isOpen ? (
							<>
								<motion.div
									key={`dialog-blackout-${id}`}
									exit="exit"
									initial="exit"
									animate="enter"
									aria-hidden="true"
									variants={
										TRANSITION_VARIANTS.fade
									}
									className="fixed inset-0 z-50 bg-black/70 "
								/>

								<motion.div
									key={`dialog-content-${id}`}
									exit="exit"
									initial="exit"
									animate="enter"
									className={root()}
									onClick={clickOutside}
									variants={
										position ===
										'center'
											? TRANSITION_VARIANTS.translateFade
											: TRANSTION_TRANSLATES[
													position
												]
									}
								>
									<StopPropogation
										{...props}
										ref={ref}
										style={{
											...style,
											overflowY,
										}}
										className={panel({
											className,
										})}
									>
										{children}
									</StopPropogation>
								</motion.div>
							</>
						) : null}
					</AnimatePresence>
				</DialogProvider>
			)
		},
	),
)

export { Dialog }
export type { DialogProps }
