'use client'

import { clsx } from '@altrui/core/utils/clsx'
import type { As, ChildrenRender, MergeWithHTMLProps } from '@altrui/core/utils/types'

type Props<P, T extends As> = Partial<{
	as: T
	items: P[]
	children: ChildrenRender<P>
}>

type GridProps<P, T extends As> = MergeWithHTMLProps<As, Props<P, T>>

const Grid = <P, T extends As = 'div'>({
	as,
	items,
	children,
	className,
	...props
}: GridProps<P, T>) => {
	const Comp = as || 'div'

	return (
		<Comp
			{...props}
			className={clsx('', className)}
		>
			{typeof children === 'function' ? items?.map(children) : children}
		</Comp>
	)
}

export { Grid }
export type { GridProps }
