import type { DimensionValue } from 'react-native'

import { View, type ViewProps } from './(defaults)'

type SpacerProps = ViewProps &
	Partial<{
		x: DimensionValue
		y: DimensionValue

		full: boolean
	}>

const Spacer = ({ x, y, full, style, ...props }: SpacerProps) => (
	<View
		{...props}
		style={[style, { marginLeft: x, marginTop: y }]}
		className={full ? 'flex-1' : ''}
	/>
)

export { Spacer }
export type { SpacerProps }
