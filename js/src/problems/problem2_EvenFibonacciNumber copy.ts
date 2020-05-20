// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

export function evenFibonacciSum() {
  const limit = 4000000;
  let sum = 0;
  let fibNumber = 1;
  let prevfibNumber = 0;

  while (sum < limit) {
    const tempPrev = fibNumber;
    fibNumber += prevfibNumber;
    prevfibNumber = tempPrev;

    if (fibNumber % 2 === 0) {
      sum += fibNumber;
      console.log(fibNumber);
    }
  }

  console.log("The sum is: ", sum);
}
