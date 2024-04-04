const random = <T = unknown>(arr: T[]): T => arr[Math.round(Math.random() * (arr.length - 1))]

export { random }
