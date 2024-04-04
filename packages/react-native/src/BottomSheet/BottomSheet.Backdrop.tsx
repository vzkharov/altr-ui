import { BottomSheetBackdrop as BottomSheetBackdropRN } from '@gorhom/bottom-sheet'

type BottomSheetBackdropProps = Parameters<typeof BottomSheetBackdropRN>[0]

const BottomSheetBackdrop = (props: BottomSheetBackdropProps) => (
	<BottomSheetBackdropRN
		opacity={0.7}
		pressBehavior="close"
		{...props}
	/>
)

export { BottomSheetBackdrop }
export type { BottomSheetBackdropProps }
export type * from '@gorhom/bottom-sheet/lib/typescript/types'
