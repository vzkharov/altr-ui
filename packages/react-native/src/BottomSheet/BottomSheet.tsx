import { forwardRef, useMemo } from 'react'

import BottomSheetRN, {
	BottomSheetView as BottomSheetViewRN,
	BottomSheetModal as BottomSheetModalRN,
	type BottomSheetModalProps as BottomSheetModalPropsRN,
} from '@gorhom/bottom-sheet'
import { useTheme, type ViewStyle, type ViewProps } from '@altrui/react-native'

import type { ReactChildren } from '../types'

type BottomSheetProps = Omit<BottomSheetModalPropsRN, 'children'> & {
	as?: 'modal' | 'sheet'

	bordered?: boolean
	transparent?: boolean
	children?: ReactChildren
	viewStyle?: ViewProps['style']
}

const BottomSheet = forwardRef<BottomSheetRN | BottomSheetModalRN, BottomSheetProps>(
	(
		{
			children,
			viewStyle,
			backgroundStyle,
			handleIndicatorStyle,
			as = 'sheet',
			bordered = false,
			transparent = false,
			...props
		},
		ref,
	) => {
		const { colors } = useTheme()

		const Comp = useMemo(
			() => (as === 'sheet' ? BottomSheetRN : BottomSheetModalRN),
			[as],
		)

		const _handleIndicatorStyle = useMemo<ViewStyle>(
			() => [
				handleIndicatorStyle,
				{ backgroundColor: colors.content4 },
				transparent ? { display: 'none' } : undefined,
			],
			[colors, transparent, handleIndicatorStyle],
		)

		const _backgroundStyle = useMemo<ViewStyle>(
			() => [
				backgroundStyle,
				{
					borderRadius: 20,

					backgroundColor: colors.content1,
				},
				bordered ? { borderWidth: 1.5, borderColor: colors.border } : {},
				transparent ? { display: 'none' } : {},
			],
			[colors, transparent, backgroundStyle],
		)

		const _viewStyle = useMemo<ViewStyle>(
			() => [{ padding: 20, paddingTop: 0 }, viewStyle],
			[viewStyle],
		)

		return (
			<Comp
				// @ts-expect-error
				ref={ref}
				backgroundStyle={_backgroundStyle}
				handleIndicatorStyle={_handleIndicatorStyle}
				{...props}
			>
				<BottomSheetViewRN style={_viewStyle}>{children}</BottomSheetViewRN>
			</Comp>
		)
	},
)

export { BottomSheet }
export type { BottomSheetProps, BottomSheetModalRN as BottomSheetModalRef }
