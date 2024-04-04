'use client'

import { createContext, useContext } from 'react'

import type { PopoverVariants } from '@altrui/styles'
import type { ReactChildren } from '@altrui/core/utils/types'
import { usePopover, type UsePopoverProps, type UsePopoverReturn } from '@altrui/core/hooks'

type PopoverConfig = Partial<UsePopoverReturn & PopoverVariants>

const PopoverContext = createContext<PopoverConfig>({} as PopoverConfig)

type PopoverProviderProps = UsePopoverProps &
	PopoverVariants & {
		children: ReactChildren
	}

const PopoverProvider = ({ children, ...props }: PopoverProviderProps) => {
	const ctx = usePopover(props)
	return <PopoverContext.Provider value={ctx}>{children}</PopoverContext.Provider>
}

const usePopoverContext = (): PopoverConfig => {
	const ctx = useContext<PopoverConfig>(PopoverContext)

	if (!ctx) {
		throw new Error('`usePopoverContext` can not be used out of `PopoverContext`')
	}

	return ctx
}

export { PopoverContext, PopoverProvider, usePopoverContext }
export type { PopoverConfig, PopoverProviderProps }
