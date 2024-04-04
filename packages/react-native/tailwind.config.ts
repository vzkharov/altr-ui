import type { Config } from 'tailwindcss'
import themeConfig from '@altrui/theme'

const componentPath = 'src/**/*.{ts,tsx,css}'

export default {
	content: [`./${componentPath}`],
	theme: {
		extend: {
			lineHeight: {},

			fontSize: {
				xs: ['12px', { lineHeight: '16px' }],
				sm: ['14px', { lineHeight: '20px' }],
				md: ['16px', { lineHeight: '24px' }],
				lg: ['18px', { lineHeight: '28px' }],
				xl: ['20px', { lineHeight: '28px' }],
				'2xl': ['24px', { lineHeight: '32px' }],
				'3xl': ['30px', { lineHeight: '36px' }],
				'4xl': ['36px', { lineHeight: '40px' }],
			},
			borderRadius: {
				xs: '8px',
				sm: '12px',
				md: '16px',
				lg: '20px',
				xl: '24px',
			},
		},
	},
	presets: [themeConfig],
} satisfies Config
