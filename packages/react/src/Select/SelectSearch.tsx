import { memo, forwardRef } from 'react'
import { clsx } from '@altrui/core/utils'

import { Input, InputProps } from '../Input'

import { useSelectContext } from './context'

type SelectSearchProps = InputProps

const SelectSearch = memo(
	forwardRef<HTMLInputElement, SelectSearchProps>(
		({ className, size = 'sm', full = true, variant = 'solid', ...props }, ref) => {
			const { selectedItem, onSearch } = useSelectContext()

			return (
				<Input
					{...props}
					ref={ref}
					full={full}
					size={size}
					variant={variant}
					onChange={onSearch}
					initialValue={selectedItem?.name}
					className={clsx(
						'font-normal border-none bg-background mb-2',
						className,
					)}
				/>
			)
		},
	),
)

export { SelectSearch }
export type { SelectSearchProps }
