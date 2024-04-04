import type { CSSProperties } from 'react'

import type { ReactChildren } from '@altrui/core/utils/types'
import type { UseCheckboxProps } from '@altrui/core/hooks'

type ToggleBaseProps = UseCheckboxProps &
	Partial<{
		containerClassName: string
		containerStyle: CSSProperties

		icon: ReactChildren
		label: ReactChildren
		description: ReactChildren
	}>

export type { ToggleBaseProps }
