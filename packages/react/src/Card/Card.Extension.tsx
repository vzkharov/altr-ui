import { clsx } from '@altrui/core/utils'
import type { As, ReactPropsOf } from '@altrui/core/utils'

import { Hint, Title, type TextProps } from '../Text'
import { Divider, type DividerProps } from '../Divider'

const CardHeader = ({ children, className, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx('max-w-md space-y-2', className)}
	>
		{children}
	</div>
)

const CardTitle = Title

const CardDescription = ({ className, ...props }: TextProps) => (
	<Hint
		className={clsx('antialiased text-sm font-medium', className)}
		{...props}
	/>
)

const CardBody = ({ className, as = 'div', ...props }: ReactPropsOf<'div'> & { as?: As }) => {
	const Slot = as || 'div'
	return (
		<Slot
			{...props}
			className={clsx('', className)}
		/>
	)
}

const CardFooter = ({ className, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx('flex gap-4', className)}
	/>
)

const CardDivider = ({ className, ...props }: DividerProps) => (
	<Divider
		{...props}
		className={clsx('!px-0 !py-0 bg-overlay/[0.15]', className)}
	/>
)

export { CardHeader, CardTitle, CardDivider, CardDescription, CardBody, CardFooter }
