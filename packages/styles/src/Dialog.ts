import { tv, type VariantProps } from 'tailwind-variants'

const dialogVariants = tv({
	slots: {
		root: 'fixed z-50 inset-0 flex p-3',
		panel: 'relative flex flex-col bg-content1 drop-shadow-sm overflow-x-hidden !rounded-md px-10 pt-6 pb-8',
		closeButton: 'absolute top-5 right-10 h-8',
	},
	variants: {
		position: {
			top: {
				root: 'flex-col',
				panel: 'w-screen max-h-fit rounded-b-xl',
			},
			right: {
				root: 'flex-row-reverse',
				panel: 'h-full max-w-fit rounded-l-xl',
			},
			bottom: {
				root: 'flex-col-reverse',
				panel: 'w-screen max-h-fit rounded-t-xl',
			},
			left: {
				root: 'flex-row',
				panel: 'h-full max-w-fit rounded-r-xl',
			},

			center: {
				root: 'flex-center',
				panel: 'rounded-md',
			},
		},
	},
	defaultVariants: {
		position: 'center',
	},
})

type DialogVariants = VariantProps<typeof dialogVariants>

export { dialogVariants }
export type { DialogVariants }
