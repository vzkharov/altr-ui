import type { Config } from 'tailwindcss'

import font from './src/font'
import border from './src/border'
import colors from './src/colors'
import animation from './src/animation'

import plugin from './src/plugin'

export default {
	darkMode: ['class'],
	content: [],
	theme: {
		...colors,
		...border,
		...font,
		...animation,
	},
	plugins: [plugin()],
} satisfies Config
