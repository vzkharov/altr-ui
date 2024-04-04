const interleave = <T>(arr: T[], thing: T) =>
	([] as T[]).concat(...arr.map((n) => [n, thing])).slice(0, -1)

export { interleave }
