import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: [
		{
			directory: '../src/**',
			files: '*.stories.*',
			titlePrefix: 'Design System',
		},
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-styling',
		'storybook-dark-mode',
	],
	framework: {
		options: {},
		name: '@storybook/react-vite',
	},
	staticDirs: ['../public'],
	core: {
		disableTelemetry: true,
		builder: '@storybook/builder-vite',
	},
	typescript: {
		check: true,
	},
}

export default config
