import { themes } from '@storybook/theming'

const meta = {
	brandTitle: 'altrui',
	brandUrl: 'https://nextui.org',
	brandTarget: '_self',
} as const

const dark = {
	...themes.dark,
	background: 'black',

	colorPrimary: 'rgb(0, 112, 240)',
	colorSecondary: 'rgba(0, 112, 240, 1)',

	textColor: 'rgb(240, 240, 252)',
	textInverseColor: 'rgb(9, 9, 12)',
	textMutedColor: 'rgb(161, 161, 170)',

	barTextColor: 'rgb(240, 240, 252)',

	buttonBg: 'rgb(39, 39, 42)',
	buttonBorder: 'transparent',

	inputBg: 'rgb(30 30 35)',
	inputBorder: 'transparent',
	inputTextColor: 'rgb(240, 240, 252)',
	inputBorderRadius: 10,

	appBg: 'rgb(9, 9, 12)',
	barBg: 'rgb(24, 24, 28)',

	appContentBg: 'rgb(9, 9, 12)',
	appBorderColor: 'rgb(24, 24, 28)',
	appBorderRadius: 0,

	brandImage: '/dark-logo.svg',
	...meta,
} as const

const light = {
	...themes.light,

	background: 'rgb(252 252 255)',

	colorPrimary: 'rgba(0, 112, 240, 1)',
	colorSecondary: 'rgba(0, 112, 240, 1)',

	textColor: 'rgb(9, 9, 12)',
	textInverseColor: 'rgb(230, 230, 247)',
	textMutedColor: 'rgb(165, 165, 174)',

	barTextColor: 'rgb(9, 9, 12)',

	buttonBg: 'rgb(230 230 240)',
	buttonBorder: 'transparent',

	inputBg: 'rgb(230 230 237)',
	inputBorder: 'transparent',
	inputTextColor: 'rgb(9, 9, 12)',
	inputBorderRadius: 10,

	appBg: 'rgb(252 252 255)',
	barBg: 'rgb(240 240 247)',

	appContentBg: 'rgb(252 252 255)',
	appBorderColor: 'rgb(230 230 240)',
	appBorderRadius: 0,

	brandImage: '/light-logo.svg',
	...meta,
} as const

export const theme = { dark, light }
