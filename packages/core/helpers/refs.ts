import { mergeRefs } from 'react-merge-refs'

type Ref<T> =
	| React.RefObject<T>
	| React.ForwardedRef<T>
	| React.MutableRefObject<T>
	| null
	| undefined

const mergeRef = <T>(refs: Array<Ref<T>>) =>
	mergeRefs<T>(
		refs.filter((ref) => typeof ref !== 'undefined' && ref !== null) as NonNullable<Ref<T>>[]
	)

export { mergeRef }
