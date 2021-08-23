function fibonacciMemoized(): (n: number) => number {
	const cache: Record<number, number> = {};

	function fibonacci(n: number): number {
		if (n < 2) return n;
		if (cache[n]) return cache[n];

		const result = fibonacci(n - 1) + fibonacci(n - 2);
		cache[n] = result;

		return result;
	}

	return fibonacci;
}

const fibonacci = fibonacciMemoized();

console.log(fibonacci(1000));