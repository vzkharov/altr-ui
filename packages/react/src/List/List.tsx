'use client'

import { listVariants, type ListVariants } from '@altrui/styles'
import type { XOR, ReactChildren, MergeWithHTMLProps } from '@altrui/core/utils'

type PropsRenderChildren<T> = {
	items: T[]
	children: (item: T, idx: number) => JSX.Element
}

type PropsReactChildren = {
	children: ReactChildren
}

type ListProps<T> = MergeWithHTMLProps<
	'ul',
	ListVariants & XOR<PropsReactChildren, PropsRenderChildren<T>>
>

const List = <T,>({
	items,
	style,
	children,
	className,
	dir = 'y',
	size = 'md',
	wrap = false,
}: ListProps<T>) => (
	<ul
		style={style}
		className={listVariants({ dir, size, wrap, className })}
	>
		{items ? items.map(children) : children}
	</ul>
)

export { List }
export type { ListProps }
