import { useState, useCallback, useLayoutEffect, type MutableRefObject } from 'react'

import { deepEqual } from '../../helpers/object'

import { useResize } from '../useResize'

import { getRealShape, type ShapeType } from './utils'

type ShapeResult = [ShapeType, () => void]

const useRealShape = <T extends HTMLElement>(ref: MutableRefObject<T | null>): ShapeResult => {
	const [state, setState] = useState<ShapeType>({ x: 0, y: 0, width: 0, height: 0 })

	const update = useCallback(() => {
		const newState = getRealShape(ref.current)

		if (deepEqual(newState, state)) {
			return
		}

		setState(newState)
	}, [setState, state])

	useLayoutEffect(update)
	useResize(update)

	return [state, update]
}

export { useRealShape }
export type { ShapeType, ShapeResult }
