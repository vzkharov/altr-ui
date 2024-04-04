'use client'

import { memo } from 'react'

import { clsx, type StyleProps } from '@altrui/core/utils'

import { PopoverProvider, type PopoverProviderProps } from './context'

const Popover = memo(
	({ style, children, className, ...props }: StyleProps & PopoverProviderProps) => {
		if (!children) {
			return null
		}

		return (
			<div
				style={style}
				className={clsx('relative', className)}
			>
				<PopoverProvider {...props}>{children}</PopoverProvider>
			</div>
		)
	},
)

export { Popover }
export type { PopoverProviderProps as PopoverProps }
