import type { ArrowFunction } from '../utils/types'

import { useControlledValue } from './useControlledValue'

type UsePaginationProps = {
	total?: number | string

	page?: number | string
	initialPage?: number | string

	onChange?: ArrowFunction<[number]>
}

const usePagination = ({ page, total, onChange, initialPage = 1 }: UsePaginationProps = {}) => {
	const [current, setCurrent] = useControlledValue<number>({
		onChange,
		value: page ? Number(page) : undefined,
		initialValue: initialPage ? Number(initialPage) : 1,
	})

	const change = (page: number) => {
		setCurrent(page)
		onChange?.(page)
	}

	const next = () => {
		if (!total || current >= Number(total)) {
			return null
		}
		change(current + 1)
	}

	const previous = () => {
		if (!total || current <= 1) {
			return null
		}
		change(current - 1)
	}

	return {
		total,
		current,
		next,
		change,
		previous,
		isNextExists: current < Number(total),
		isPreviousExists: current >= 0,
	}
}

type UsePaginationResult = ReturnType<typeof usePagination>

export { usePagination }
export type { UsePaginationProps, UsePaginationResult }
