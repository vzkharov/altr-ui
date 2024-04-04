'use client'

import { memo, useRef, useEffect } from 'react'
import { clsx } from '@altrui/core/utils/clsx'

type DripProps = {
	x: number
	y: number

	visible: boolean

	className?: string

	onCompleted: () => void
}

const Drip = memo<DripProps>(({ x, y, visible, className, onCompleted, ...props }) => {
	const ref = useRef<HTMLDivElement>(null)
	const top = Number.isNaN(+y) ? 0 : Math.floor(y)
	const left = Number.isNaN(+x) ? 0 : Math.floor(x)

	useEffect(() => {
		let drip = ref.current

		if (!drip) {
			return
		}

		drip.addEventListener('animationend', onCompleted)

		return () => {
			if (!drip) {
				return
			}

			drip.removeEventListener('animationend', onCompleted)
		}
	})

	if (!visible) {
		return null
	}

	return (
		<div
			ref={ref}
			className={clsx('absolute inset-0 z-10 opacity-10', className)}
			{...props}
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				style={{
					top: `calc(${top}px - 50%)`,
					left: `calc(${left}px - 50%)`,
				}}
				className="absolute w-full h-full animate-drip"
			>
				<g
					fill="none"
					stroke="none"
					strokeWidth="1"
					fillRule="evenodd"
				>
					<g fill="currentColor">
						<rect
							rx="10"
							width="100%"
							height="100%"
						/>
					</g>
				</g>
			</svg>
		</div>
	)
})

export { Drip }
export type { DripProps }
