import React from 'react'

import type { ArrowFunction } from '../utils/types'

import { useScroll } from './useScroll'
import { useResize } from './useResize'
import { useToggle } from './useToggle'
import { useKeyPress } from './useKeyPress'
import { usePlacement } from './usePlacement'
import { useClickOutside } from './useClickOutside'

import type { PlacementProps } from './usePlacement'

type UsePopoverProps = Partial<
	PlacementProps & {
		open: boolean
		initialOpen: boolean

		preventClose: boolean

		full: boolean
		width: string | number

		onOpen: ArrowFunction
		onClose: ArrowFunction
		onChange: ArrowFunction<[boolean]>
	}
>

const usePopover = ({
	width,
	onOpen,
	onClose,
	onChange,
	initialOpen,
	open: externalOpen,
	offset = 10,
	full = false,
	align = 'start',
	position = 'bottom',
	preventClose = false,
}: UsePopoverProps) => {
	const contentRef = React.useRef<HTMLDivElement>(null)
	const triggerRef = React.useRef<HTMLDivElement>(null)

	const [visible, { set, close, open, toggle }] = useToggle({
		onChange,
		onActive: onOpen,
		onUnactive: onClose,
		value: externalOpen,
		initialValue: initialOpen,
	})

	const { css, update, rects } = usePlacement({
		align,
		offset,
		position,
		triggerRef,
		contentRef,
	})

	useResize(update)
	useScroll(close)

	useKeyPress('Enter', close)
	useKeyPress('Escape', close)

	useClickOutside([triggerRef, contentRef], () => !preventClose && close())

	return {
		set,
		open,
		close,
		toggle,
		visible,
		triggerRef,
		contentRef,
		preventClose,
		css: {
			...css,
			width: full ? rects.trigger.width : width,
		},
	}
}

type UsePopoverReturn = ReturnType<typeof usePopover>

export { usePopover }
export type { UsePopoverProps, UsePopoverReturn }
