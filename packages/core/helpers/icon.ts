import type { ArrowFunction } from '../utils/types'

type IconProps = Partial<{
	color: string
	size: string | number
	strokeWidth: string | number

	className: string
	onClick: ArrowFunction<any>
}>

export type { IconProps }
