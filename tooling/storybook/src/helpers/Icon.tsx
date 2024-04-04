import React from 'react'
import { icons, type LucideProps } from 'lucide-react'

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }} />

type IconProps = Omit<LucideProps, 'ref'> & {
	solid?: boolean
	name: keyof typeof icons
}

const Icon = ({ name, style, solid = false, size = 18, ...props }: IconProps) => {
	const LucideIcon = icons[name]

	return (
		<React.Suspense fallback={fallback}>
			<LucideIcon
				{...props}
				size={size}
				style={{ ...style, fill: solid ? 'currentcolor' : undefined }}
			/>
		</React.Suspense>
	)
}

export { Icon }
export type { IconProps }
