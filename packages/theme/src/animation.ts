import type { Config } from 'tailwindcss'

export default {
	transitionTimingFunction: {
		default: 'cubic-bezier(.4,0,.6,1)',
	},
	keyframes: {
		bounce: {
			'0%': {
				transform: 'translateX(0px)',
			},

			'50%': {
				transform: 'translateX(6px)',
			},

			'100%': {
				transform: 'translateX(0px)',
			},
		},
		drip: {
			'0%': {
				opacity: '0',
				transform: 'scale(0.25)',
			},
			'30%': {
				opacity: '1',
			},
			'70%': {
				opacity: '0.5',
			},
			'100%': {
				opacity: '0',
				transform: 'scale(12)',
			},
		},
		rotate: {
			'0%': {
				transform: 'rotate(0)',
			},

			'100%': {
				transform: 'rotate(360deg)',
			},
		},
		dotScale: {
			'0%': {
				r: '1.5px',
			},
			'50%': {
				r: '2.5px',
			},
			'100%': {
				r: '1.5px',
			},
		},
		gradient: {
			'0%': {
				backgroundPosition: '0% 50%',
			},
			'50%': {
				backgroundPosition: '100% 50%',
			},
			'100%': {
				backgroundPosition: '0% 50%',
			},
		},
		slide: {
			'0%': {
				opacity: '0',
				transform: 'translateY(-10px)',
			},
			'50%': {
				opacity: '0.5',
				transform: 'translateY(-3px)',
			},
			'100%': {
				opacity: '1',
				transform: 'translateY(0px)',
			},
		},
		scale: {
			'0%': { opacity: '0', transform: 'scale(0.95)' },
			'100%': { opacity: '1', transform: 'scale(1)' },
		},
		skeleton: {
			'50%': {
				opacity: '0.5',
			},
		},
	},
	animation: ({ theme }) => ({
		drip: 'drip 450ms ease-in forwards',
		bounce: 'bounce 1s ease-in-out infinite',
		rotate: `rotate 750ms ${theme('transitionTimingFunction.default')} infinite`,
		slide: 'slide 300ms ease-out forwards',
		scale: 'scale 150ms ease-out forwards',
		gradient: `gradient 2s ease infinite`,
		skeleton: `skeleton 2s ${theme('transitionTimingFunction.default')} infinite`,
	}),
} satisfies Config['theme']
