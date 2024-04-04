import React from 'react'

import { clsx } from '@altrui/core/utils/clsx'
import type { ReactChildren } from '@altrui/core/utils/types'
import { alertVariants, type AlertVariants } from '@altrui/styles'

import { Dialog, type DialogProps } from '../Dialog'

type AlertProps = DialogProps &
	AlertVariants & {
		icon: ReactChildren
		width?: string | number
	}

const Alert = React.memo(
	React.forwardRef<HTMLDivElement, AlertProps>(
		(
			{
				icon,
				width,
				style,
				color,
				children,
				className,
				position = 'center',
				...props
			},
			ref,
		) => (
			<Dialog
				{...props}
				ref={ref}
				position={position}
				style={{ ...style, width }}
				className={alertVariants({ color, className })}
			>
				<div className={clsx('mb-2')}>{icon}</div>
				{children}
			</Dialog>
		),
	),
)

export { Alert }
export type { AlertProps }
