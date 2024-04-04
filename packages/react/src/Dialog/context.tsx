'use client'

import { createContext, useContext, type ProviderProps } from 'react'

import { Portal } from '../Portal'

type DialogConfig = {
	open: boolean
	onClose: () => unknown
	onChange: (value: boolean) => unknown
}

const DialogContext = createContext<DialogConfig>({} as DialogConfig)

const DialogProvider = ({ value, children }: ProviderProps<DialogConfig>) => (
	<Portal>
		<DialogContext.Provider value={value}>{children}</DialogContext.Provider>
	</Portal>
)

const useDialogContext = (): DialogConfig => {
	const ctx = useContext<DialogConfig>(DialogContext)

	if (!ctx) {
		throw new Error('`useDialogContext` can not be used out of `DialogContext`')
	}

	return ctx
}

export { DialogContext, DialogProvider, useDialogContext }
export type { DialogConfig }
