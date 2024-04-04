type ShapeType = {
	x: number
	y: number
	width: number
	height: number
}

const getRealShape = (el: HTMLElement | null): ShapeType => {
	const defaultShape: ShapeType = { width: 0, height: 0, x: 0, y: 0 }

	if (!el || typeof window === 'undefined') {
		return defaultShape
	}

	const rect = el.getBoundingClientRect()

	return {
		x: rect.x,
		width: rect.width,
		height: rect.height,
		y: window.scrollY + el.getBoundingClientRect().top,
	}
}

export { getRealShape }
export type { ShapeType }
