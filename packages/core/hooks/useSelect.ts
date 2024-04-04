import type { ArrowFunction } from '../utils/types'

import { useControlledValue } from './useControlledValue'

type Suggest = {
	id: string
	name: string
}

type UseSelectProps = Partial<{
	htmlBehaviour: boolean

	empty: boolean
	readOnly: boolean
	searchable: boolean

	item: Suggest
	initialItem: Suggest

	onClickOutside: ArrowFunction

	onSearch: ArrowFunction<[string]>
	onSelect: ArrowFunction<[Suggest]>
}>

const useSelect = ({
	item,
	onSearch,
	onSelect,
	initialItem,
	readOnly = false,
	searchable = false,
}: UseSelectProps) => {
	const [selectedItem, setSelectedItem] = useControlledValue<Suggest | undefined>({
		readOnly,
		value: item,
		initialValue: initialItem,
	})
	const [searchText, setSearchText] = useControlledValue({
		readOnly,
		initialValue: initialItem?.name,
	})

	const handleSearch = (_value: string) => {
		if (!searchable) {
			return null
		}

		onSearch?.(_value)

		setSearchText(_value)
	}

	const handleSelect = (_suggest: Suggest) => {
		onSelect?.(_suggest)

		setSearchText(_suggest.name)
		setSelectedItem(_suggest)
	}

	return { searchText, selectedItem, handleSearch, handleSelect }
}

type UseSelectRetun = ReturnType<typeof useSelect>

export { useSelect }
export type { Suggest, UseSelectProps, UseSelectRetun }
