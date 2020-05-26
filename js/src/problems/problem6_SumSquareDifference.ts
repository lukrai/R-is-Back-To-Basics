// The sum of the squares of the first ten natural numbers is,

// 12+22+...+102=385
// The square of the sum of the first ten natural numbers is,

// (1+2+...+10)2=552=3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

export function getSumSquareDifference(number: number) {
  let squares = 0;
  let sumOfSquares = 0;
  for (let index = 0; index <= number; index++) {
    // const element = array[index];
    squares += index ** 2;
    sumOfSquares += index;
  }
  sumOfSquares = sumOfSquares ** 2;
  console.log(squares, sumOfSquares);
  return sumOfSquares - squares;
}

export function sumSquareDifference() {
  console.log("------------------------------------------------------------");
  console.time("sumSquareDifference");
  const result = getSumSquareDifference(100);
  console.log("sumSquareDifference: ", result);
  console.timeEnd("sumSquareDifference");
}
