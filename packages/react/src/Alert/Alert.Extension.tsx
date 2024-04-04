import { clsx } from '@altrui/core/utils/clsx'
import type { ReactPropsOf } from '@altrui/core/utils/types'

import { Hint, Title, type TextProps } from '../Text'

import { DialogCloseButton } from '../Dialog'

const AlertTitle = ({ as, className, ...props }: TextProps) => (
	<Title
		as="h4"
		size={24}
		className={clsx('text-center', className)}
		{...props}
	/>
)

const AlertDescription = ({ className, ...props }: TextProps) => (
	<Hint
		lineClamp={2}
		className={clsx('antialiased max-w-md text-center mt-3 w-fit', className)}
		{...props}
	/>
)

const AlertActions = ({ className, ...props }: ReactPropsOf<'div'>) => (
	<div
		className={clsx('mt-8', className)}
		{...props}
	/>
)

export { AlertTitle, AlertDescription, AlertActions, DialogCloseButton as AlertCloseButton }
