import { ReactNode } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

type ValueOf<T> = T[keyof T]
type nullable<T> = T | null | undefined
type AnyObject = {
	[x: string | number | symbol]: unknown
}
type OptionalOfUndefined<T, D, U> = T extends undefined ? U : D

type ArrowFunction<P extends Array<unknown> = [], R = unknown> = (...args: P) => R

type ReactChildren = ReactNode | ReactNode[] | undefined | string
type StyleProps<T = ViewStyle> = Partial<{
	className: string
	style: StyleProp<T>
}>

export type {
	ValueOf,
	nullable,
	AnyObject,
	StyleProps,
	ReactChildren,
	ArrowFunction,
	OptionalOfUndefined,
}
