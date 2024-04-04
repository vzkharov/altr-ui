'use client'

import { memo, forwardRef } from 'react'

import { clsx } from '@altrui/core/utils/clsx'
import { ArrowIcon } from '@altrui/core/icons'
import { useSelect, useToggle, type UseSelectProps } from '@altrui/core/hooks'

import { Input, type InputProps } from '../Input'
import { Menu, MenuTrigger, MenuContent } from '../Menu'

import { SelectEmpty } from './Select.Empty'
import { SelectLoading } from './Select.Loading'

import { SelectContext } from './context'
import { SelectSearch } from './SelectSearch'

type Props = UseSelectProps &
	Partial<{
		htmlBehaviour: boolean

		width: string | number

		empty: boolean
		emptyText: string
	}>

type SelectProps = Omit<
	InputProps<'input'>,
	| 'as'
	| 'value'
	| 'onClear'
	| 'onChange'
	| 'onSelect'
	| 'clearable'
	| 'initialValue'
	| keyof Props
> &
	Props

const Select = memo(
	forwardRef<HTMLInputElement, SelectProps>(
		(
			{
				item,
				full,
				width,
				variant,
				children,
				onSelect,
				disabled,
				readOnly,
				onSearch,
				className,
				emptyText,
				searchable,
				initialItem,
				onClickOutside,
				empty = false,
				loading = false,
				htmlBehaviour = false,
				...props
			},
			ref,
		) => {
			const openable = !readOnly

			const [open, { set }] = useToggle({
				readOnly: !openable,
				initialValue: false,
			})
			const { selectedItem, handleSearch, handleSelect } = useSelect({
				searchable,
				item,
				onSearch,
				onSelect,
				initialItem,
				onClickOutside,
			})

			return (
				<Menu
					full
					open={open}
					width={width}
					onChange={set}
				>
					<SelectContext.Provider
						value={{
							selectedItem,
							visible: false,
							onSearch: handleSearch,
							setSelected: handleSelect,
						}}
					>
						<MenuTrigger
							className={clsx(
								full ? 'w-full' : '',
								className,
							)}
						>
							{({ visible }) => (
								<Input
									{...props}
									readOnly
									ref={ref}
									full={full}
									variant={variant}
									value={selectedItem?.name}
									className={clsx(
										'gap-x-3',
										!readOnly
											? 'cursor-pointer'
											: '',
									)}
									iconRight={
										openable ? (
											<ArrowIcon
												dir={
													visible
														? 'top'
														: 'bottom'
												}
											/>
										) : null
									}
								/>
							)}
						</MenuTrigger>
						<MenuContent>
							{searchable ? <SelectSearch /> : null}

							{loading ? <SelectLoading /> : null}

							{empty && !loading ? (
								<SelectEmpty text={emptyText} />
							) : null}

							{!empty && !loading ? children : null}
						</MenuContent>
					</SelectContext.Provider>
				</Menu>
			)
		},
	),
)

export { Select }
export type { SelectProps }
