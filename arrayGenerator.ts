/**
 * Generate a range of numbers like python, takes 1 to 3 arguments.
 * @param n1 is used as limiter from 0 to n1 if only arg is passed n1.
 * @param n2 is used as limiter from n1 to n2
 * @param step
 */
export function range(n1: number, n2?: number, step?: number) {
  const limit = n2 || n1;
  const start = n2 && n1;

  return [...Array(limit).keys()].slice(start).filter(
    (_, index) => !(index % (step || 1)),
  );
}

console.log(range(10, 20, 2));
