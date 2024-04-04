import type { Config } from 'tailwindcss'
import themeConfig from '@altrui/theme'

const componentPath = '**/*.{ts,tsx,css}'
const uiContentPath = '../../altrui'

export default {
	content: [`./src/${componentPath}`, `${uiContentPath}/${componentPath}`],
	presets: [themeConfig],
} satisfies Config
