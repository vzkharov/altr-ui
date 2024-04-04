import { useEffect } from 'react'

const lockHtml = () => {
	document.documentElement.style.overflow = 'hidden'
	document.documentElement.style.paddingRight = '0px'
}

const unlockHtml = () => {
	document.documentElement.style.overflow = 'auto'
	document.documentElement.style.paddingRight = '0px'
}

const useBodyScroll = (value: boolean) => {
	useEffect(() => {
		if (value) {
			lockHtml()
			return
		}
		unlockHtml()
	}, [value])
}

export { useBodyScroll }
