import React from 'react'

import type { ArrowFunction } from '../utils/types'

type ControlledOrUncontrolledProps<T> = Partial<{
	readOnly: boolean

	value: T | null
	initialValue: T | null

	onChange: ArrowFunction<[T]>
}>

const useControlledValue = <T>({
	readOnly,
	onChange,
	initialValue,
	value: externalValue,
}: ControlledOrUncontrolledProps<T> = {}) => {
	const [localValue, setLocalValue] = React.useState<T | null | undefined>(initialValue)
	const value = (typeof externalValue === 'undefined' ? localValue : externalValue) as T

	const setValue = (val: T) => {
		if (readOnly) {
			return null
		}

		setLocalValue(val)
		onChange?.(val)
	}

	return [value, setValue] as const
}

type UseControlledReturn = ReturnType<typeof useControlledValue>

export { useControlledValue }
export type { ControlledOrUncontrolledProps, UseControlledReturn }
