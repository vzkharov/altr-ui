import React from 'react'

import type { ArrowFunction } from '../utils/types'

import { useToggle } from './useToggle'

type UseFocusProps = Partial<{
	onBlur: ArrowFunction<[boolean]>
	onFocus: ArrowFunction<[boolean]>

	onFocusChange: ArrowFunction<[boolean]>
}>

const useFocus = ({ onBlur, onFocus, onFocusChange }: UseFocusProps = {}) => {
	const [focused, { open, close }] = useToggle({
		onActive: onFocus,
		onUnactive: onBlur,
		onChange: onFocusChange,
	})

	const bindings = {
		onTouchEnd: close,
		onMouseDown: open,
		onMouseMove: close,
		onTouchStart: open,
		onTouchCancel: close,
	} satisfies React.HTMLAttributes<'div'>

	return [focused, bindings] as const
}

type UseFocusReturn = ReturnType<typeof useFocus>

export { useFocus }
