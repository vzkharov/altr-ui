import type { Config } from 'tailwindcss'
import themeConfig from '@altrui/theme'

const componentPath = 'src/**/*.{ts,tsx,css}'
const stylesPath = '../styles/'

export default {
	content: [`./${componentPath}`, `${stylesPath}/${componentPath}`],
	presets: [themeConfig],
} satisfies Config
