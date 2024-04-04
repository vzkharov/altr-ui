import { darken, lighten, transparentize, toRgba } from 'color2k'

import type { Theme } from './types'

const DARK = 'rgb(5, 5, 9)'
const LIGHT = 'rgb(240, 240, 252)'

const _ = {
	100: toRgba(lighten(DARK, 0.03)),
	200: toRgba(lighten(DARK, 0.06)),
	300: toRgba(lighten(DARK, 0.09)),
	400: toRgba(lighten(DARK, 0.12)),
	500: toRgba(lighten(DARK, 0.15)),
}

const GRAY = {
	dark: {
		0: toRgba(lighten(DARK, 0)),
		100: 'rgb(16, 16, 20)',
		200: 'rgb(23, 23, 28)',
		300: 'rgb(30, 30, 36)',
		400: 'rgb(37, 37, 44)',
		500: 'rgb(55, 55, 64)',
		600: 'rgb(82, 82, 88)',
		700: 'rgb(113, 113, 127)',
		800: 'rgb(135, 135, 151)',
		900: 'rgb(220, 220, 234)',
		1: toRgba(darken(LIGHT, 0)),
	},
	light: {
		0: 'rgb(255, 255, 255)',
		100: 'rgb(245, 245, 247)',
		200: 'rgb(24, 24, 29)',
		300: 'rgb(30, 30, 36)',
		400: 'rgb(39, 39, 44)',

		600: 'rgb(82, 82, 102)',
		700: 'rgb(113, 113, 133)',
		800: 'rgb(135, 135 155)',
		900: 'rgb(220, 220, 231)',
		1: 'rgb(240, 240, 252)',
	},
} as const

const COMMON = {
	black: 'rgb(0, 0, 0)',

	dark: 'rgb(9, 9, 12)',
	white: 'rgb(240, 240, 252)',

	primary: 'rgb(38, 131, 255)',
	secondary: 'rgb(240, 240, 252)',

	gradient: {
		start: 'rgb(38, 164, 255)',
		end: 'rgb(38, 131, 255)',
	},

	tag: {
		white: 'rgb(240, 240, 252)',
		blue: 'rgb(38, 131, 255)',
		red: 'rgb(243, 18, 72)',
		yellow: 'rgb(245, 165, 36)',
		green: 'rgb(24, 201, 100)',
		gray: 'rgb(82, 82, 91)',
	},
	tagShadow: {
		white: 'rgba(240, 240, 252, 0.15)',
		blue: 'rgba(38, 131, 255, 0.15)',
		red: 'rgba(243, 18, 72, 0.15)',
		yellow: 'rgba(245, 165, 36, 0.15)',
		green: 'rgba(24, 201, 100, 0.15)',
		gray: 'rgba(82, 82, 91, 0.15)',
	},
} as const

const LAYOUT = {
	border: GRAY.dark[200],
	divider: GRAY.dark[300],

	card: GRAY.dark[100],
	modal: GRAY.dark[0],
	overlay: transparentize(GRAY.dark[600], 0.9),

	content1: GRAY.dark[100],
	content2: GRAY.dark[200],
	content3: GRAY.dark[300],
	content4: GRAY.dark[400],

	background: GRAY.dark[0],
	foreground: GRAY.dark[1],

	text: {
		muted: GRAY.dark[600],
		ghost: GRAY.dark[800],
		default: GRAY.dark[1],
		foreground: GRAY.dark[0],
	},
} as const

export { COMMON, GRAY, LAYOUT }

export default {
	colors: {
		...COMMON,
		...LAYOUT,

		inherit: 'inherit',
		transparent: 'transparent',
		currentColor: 'currentColor',

		gray: GRAY.dark,
	},
} satisfies Theme
