'use client'

import { createContext, useContext } from 'react'

import type { TabsVariant } from '@altrui/styles'
import type { ArrowFunction } from '@altrui/core/utils/types'

import type { Item } from './types'

type TabsConfig = TabsVariant & {
	id?: string

	selectedItem?: Item
	setSelectedItem?: ArrowFunction<[Item]>

	disableAnimation?: boolean
}

const TabsContext = createContext<TabsConfig>({} as TabsConfig)

const useTabsContext = (): TabsConfig => {
	const ctx = useContext(TabsContext)

	if (!ctx) {
		throw new Error('`useTabsContext` can not be used out of `TabsContext`')
	}

	return ctx
}

export { TabsContext, useTabsContext }
export type { TabsConfig }
