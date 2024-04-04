import type { PressableProps, StyleProp, ViewStyle } from 'react-native'

import type { ReactChildren } from '../types'

export type TouchableProps = Omit<PressableProps, 'children'> & {
	children: ReactChildren
	containerClassName?: string
	style?: StyleProp<ViewStyle>
}
