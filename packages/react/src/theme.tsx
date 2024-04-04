import { createContext, useContext, useMemo, useState } from 'react'
import { generateColors, Theme as ThemeType, type Colors } from '@altrui/theme/color'

import type { ReactChildren } from '@altrui/core/utils'

type Layout = {}

type ThemeConfig = { theme: ThemeType; colors: Colors; layout: Layout }

const ThemeContext = createContext<ThemeConfig>({} as ThemeConfig)

type ThemeProviderProps = {
	theme?: ThemeType
	children: ReactChildren
}

const ThemeProvider = ({ children, theme = ThemeType.Dark }: ThemeProviderProps) => {
	const [colors] = useState<Colors>(generateColors(theme))

	const layoutColors = useMemo(
		() => ({
			dark: theme === ThemeType.Dark,
			colors: {
				card: colors.overlay,
				text: colors.text.default,
				border: colors.border,
				primary: colors.tag.blue,
				background: colors.background,
				notification: colors.tag.blue,
			},
		}),
		[colors],
	)

	return (
		<ThemeContext.Provider value={{ theme, colors, layout: layoutColors }}>
			{children}
		</ThemeContext.Provider>
	)
}

const useTheme = () => {
	const ctx = useContext<ThemeConfig>(ThemeContext)

	if (!ctx) {
		throw new Error('`useTheme` can not be used out of `ThemeContext`')
	}

	return ctx
}

export { useTheme, ThemeProvider, ThemeType }
export type { ThemeConfig, Colors as ThemeColors, Layout as ThemeLayout }
