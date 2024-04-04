'use client'

import { memo, forwardRef, useId } from 'react'

import { motion, LayoutGroup } from 'framer-motion'

import { ArrowIcon } from '@altrui/core/icons'
import { slideTransition } from '@altrui/core/utils/framer-motion'
import type { MergeWithHTMLProps } from '@altrui/core/utils/types'
import { usePagination, type UsePaginationProps } from '@altrui/core/hooks'
import { pageContainerVariants, type PaginationVariants } from '@altrui/styles'

import { PageController } from './PageController'

type PaginationProps = MergeWithHTMLProps<'ul', UsePaginationProps & PaginationVariants>

const Pagination = memo(
	forwardRef<HTMLUListElement, PaginationProps>(
		(
			{
				total,
				onChange,
				className,
				size = 'md',
				color = 'info',
				shadow = false,
				variant = 'solid',
				initialPage = 1,
				...props
			},
			ref,
		) => {
			const id = useId()

			const {
				next,
				change,
				previous,
				current: currentPage,
			} = usePagination({
				total,
				onChange,
				initialPage,
			})

			if (!total) {
				return null
			}

			const paginationStyleProps = { size, color, shadow }

			return (
				<ul
					{...props}
					ref={ref}
					className={pageContainerVariants({
						size,
						variant,
						className,
					})}
				>
					<PageController
						size={size}
						onClick={previous}
						disabled={currentPage <= 1}
					>
						<ArrowIcon dir="left" />
					</PageController>

					<LayoutGroup id={id}>
						{[...new Array(total).fill(0)].map((_, page) => (
							<li
								key={page + 1}
								className="relative z-0"
							>
								<PageController
									size={size}
									onClick={() =>
										change(page + 1)
									}
								>
									{page + 1}
								</PageController>

								{currentPage === page + 1 ? (
									<motion.span
										layout
										layoutId={id}
										layoutDependency={
											false
										}
										transition={
											slideTransition
										}
										className="absolute inset-0 z-0"
									>
										<PageController
											active
											{...paginationStyleProps}
										>
											{
												currentPage
											}
										</PageController>
									</motion.span>
								) : null}
							</li>
						))}
					</LayoutGroup>

					<PageController
						size={size}
						onClick={next}
						disabled={currentPage >= Number(total)}
					>
						<ArrowIcon dir="right" />
					</PageController>
				</ul>
			)
		},
	),
)

export { Pagination }
export type { PaginationProps }
