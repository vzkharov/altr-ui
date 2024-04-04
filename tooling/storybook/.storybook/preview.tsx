import 'tailwindcss/tailwind.css'

import type { Preview } from '@storybook/react'

import { theme } from './theme'

import './style.css'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		options: {
			storySort: {
				method: 'alphabetical',
				order: ['Foundations', 'Components'],
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		darkMode: {
			current: 'dark',
			darkClass: 'dark',
			lightClass: 'light',
			classTarget: 'html',
			stylePreview: true,

			dark: theme.dark,
			light: theme.light,
		},
	},
}

export default preview
