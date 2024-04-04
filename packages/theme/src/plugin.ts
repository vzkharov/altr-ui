import plugin from 'tailwindcss/plugin'
import { COMMON } from './colors'

const textGradientClip = {
	width: 'fit-content',
	color: 'transparent',
	backgroundClip: 'text',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
}

const utils = () =>
	plugin(({ addUtilities, theme }) => {
		const transitionDefault = {
			transitionProperty: 'all',
			transitionDuration: '200ms',
			transitionTimingFunction: theme('transitionTimingFunction.default'),
		}

		addUtilities({
			// @ts-expect-error
			'.transition-all': transitionDefault,

			'.w-unset': {
				width: 'unset',
			},
			'.h-unset': {
				height: 'unset',
			},
			'.line-clamp-none': {
				'-webkit-line-clamp': 'unset',
			},

			'.flex-center': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},

			'.bg-glass': {
				backdropFilter: 'blur(16px)',
				backgroundColor: 'rgb(30 30 36 / 0.5)',
			},
			'.bg-overlay': {
				backgroundColor: 'rgb(140 140 180 / 0.15)',
			},

			'.shadow-default': {
				filter: 'drop-shadow(0 4px 74px rgb(0 0 0 / 0.35))',
			},

			'.shadow-inner-default': {},

			'.text-brand': {
				...textGradientClip,
				backgroundImage: `linear-gradient(to right, ${COMMON.gradient.start} 0%, ${COMMON.gradient.end} 100%)`,
			},
		})
	})

export default utils
