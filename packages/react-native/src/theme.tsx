import { createContext, useContext, useMemo, useState } from 'react'
import { generateColors, Theme as ThemeType, type Colors } from '@altrui/theme/color'
import { ThemeProvider as RNThemeProvider, type Theme as Layout } from '@react-navigation/native'

import type { ReactChildren } from './types'

type ThemeConfig = { theme: ThemeType; colors: Colors; layout: Layout }

const ThemeContext = createContext<ThemeConfig>({} as ThemeConfig)

ThemeContext.displayName = '@altrui/ThemeContext'

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
		<RNThemeProvider value={layoutColors}>
			<ThemeContext.Provider value={{ theme, colors, layout: layoutColors }}>
				{children}
			</ThemeContext.Provider>
		</RNThemeProvider>
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
