import { Children, memo, useMemo } from 'react'

import { interleave } from '@altrui/core/helpers/array'

import { Divider } from '../Divider'
import { View, type ViewProps } from '../(defaults)'

const ButtonGroup = memo<ViewProps>(({ style, children }) => {
	const childrenArray = Children.toArray(children)

	const content = useMemo(
		() => interleave(childrenArray, <Divider className="mx-4" />),
		[childrenArray],
	)

	return (
		<View
			style={style}
			className="rounded-md bg-content3"
		>
			{content}
		</View>
	)
})

export { ButtonGroup }
