import { range } from "./arrayGenerator.ts";

/**
 * return a list of divisors that has not remainder
 * @param number
 * @returns a list of divisors
 */
function getDivisorList(number: number): number[] {
  const dividers = [];

  for (const divisor of range(number)) {
    if (number % divisor === 0) {
      dividers.push(divisor);
    }
  }

  return dividers;
}

function addNumberList(numbers: number[]): number {
  return numbers.reduce((acc, number) => acc + number);
}

/**
 * check if a number have a friend number.
 * @param n any number
 * @returns his friend number or undefined
 */
function getFriendNumber(n: number): number | void {
  const divisors = getDivisorList(n);
  const posibleFriendNumber = addNumberList(divisors);
  const areFriends = n === addNumberList(getDivisorList(posibleFriendNumber));

  if (areFriends) return posibleFriendNumber;
}

console.log(getFriendNumber(220));
