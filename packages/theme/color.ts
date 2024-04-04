import resolveConfig from 'tailwindcss/resolveConfig'

import config from '.'

const colors = resolveConfig(config).theme.colors

enum Theme {
	Dark = 'dark',
	Light = 'light',
}

type Colors = typeof colors

const generateColors = (theme: Theme): Colors => colors

const Dark = generateColors(Theme.Dark)
const Light = generateColors(Theme.Light)

export { Theme, Dark, Light, generateColors }
export type { Colors }
