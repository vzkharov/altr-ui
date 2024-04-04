import { Hint } from '../Text'

const SelectEmpty = ({ text }: { text?: string }) => (
	<Hint className="w-full p-5 flex-center select-none cursor-default">{text || 'Empty...'}</Hint>
)

export { SelectEmpty }
