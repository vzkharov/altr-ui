import { useId } from 'react'

import { useBodyScroll } from './useBodyScroll'
import { useToggle, type UseToggleProps } from './useToggle'

type UseDialogProps = UseToggleProps & {
	preventClose?: boolean
}

const useDialog = ({ preventClose, ...toggleProps }: UseDialogProps) => {
	const id = useId()

	const [isOpen, { set, close, open }] = useToggle(toggleProps)

	useBodyScroll(isOpen)

	const handleClickOutside = () => isOpen && !preventClose && close()

	return { id, set, close, open, isOpen, clickOutside: handleClickOutside }
}

type UseDialogReturn = ReturnType<typeof useDialog>

export { useDialog }
export type { UseDialogProps, UseDialogReturn }
