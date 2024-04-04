'use client'

import { createContext, useContext } from 'react'

import type { Suggest } from '@altrui/core/hooks'
import type { ArrowFunction } from '@altrui/core/utils/types'

type SelectConfig = {
	visible?: boolean

	selectedItem?: Suggest
	setSelected?: ArrowFunction<[Suggest]>

	onSearch?: ArrowFunction<[string]>
}

const SelectContext = createContext<SelectConfig>({} as SelectConfig)

const useSelectContext = (): SelectConfig => {
	const ctx = useContext<SelectConfig>(SelectContext)

	if (!ctx) {
		throw new Error('`useSelectContext` can not be used out of `SelectContext`')
	}

	return ctx
}

export { SelectContext, useSelectContext }
export type { SelectConfig }
