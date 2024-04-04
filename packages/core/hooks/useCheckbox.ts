import { useToggle, type ControlledOrUncontrolledProps } from '.'

type UseCheckboxProps = ControlledOrUncontrolledProps<boolean> & {
	disabled?: boolean
}

const useCheckbox = ({ value, onChange, disabled, readOnly, initialValue }: UseCheckboxProps) => {
	const clickable = !(disabled || readOnly)

	const [checked, { set, toggle }] = useToggle({
		value,
		onChange,
		initialValue,
		disabled: !clickable,
	})

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => set(event.target.checked)

	return { checked, clickable, onChange: changeHandler, onClick: toggle }
}

type UseCheckboxReturn = ReturnType<typeof useCheckbox>

export { useCheckbox }
export type { UseCheckboxProps, UseCheckboxReturn }
