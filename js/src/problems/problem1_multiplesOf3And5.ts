// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

export function multiplesOf3And5() {
  console.log("function");
  const limit = 1000;
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;
    if (isMultipleOf3 || isMultipleOf5) {
      sum += i;
    }
  }

  console.log("The sum is: ", sum);
}
