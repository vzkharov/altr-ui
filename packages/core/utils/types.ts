import React from 'react'

type ReactChildren = React.ReactNode | React.ReactNode[]

type ReactElement<P = {}> =
	| React.ReactElement<P, string | React.JSXElementConstructor<P>>
	| React.ReactComponentElement<any, P>
	| React.FC<P>

type ChildrenRender<P> = ArrowFunction<[P], ReactChildren> | ReactChildren

type As = React.ElementType<any>

type StyleProps = Partial<{
	style: React.CSSProperties
	className: string
}>

type ReactPropsOf<T extends As> = React.ComponentPropsWithoutRef<T>

type MergeWithHTMLProps<T extends As, P = {}> = Omit<ReactPropsOf<T>, keyof P> & P

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U

type XORs<T extends unknown[]> = T extends [infer P1, infer P2]
	? XOR<P1, P2>
	: T extends [infer Only, ...infer Rest]
	  ? XOR<Only, XORs<Rest>>
	  : never

type MergeXOR<T, P> = Without<T, P> & P

type Never<T> = T extends object ? { [P in keyof T]?: never } : never

type ArrowFunction<P extends Array<unknown> = [], R = unknown> = (...args: P) => R

export type {
	As,
	XOR,
	XORs,
	Never,
	Without,
	MergeXOR,
	StyleProps,
	ReactPropsOf,
	ReactElement,
	ReactChildren,
	ArrowFunction,
	ChildrenRender,
	MergeWithHTMLProps,
}
