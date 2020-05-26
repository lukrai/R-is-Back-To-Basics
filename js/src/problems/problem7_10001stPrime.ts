// The sum of the squares of the first ten natural numbers is,

// 12+22+...+102=385
// The square of the sum of the first ten natural numbers is,

// (1+2+...+10)2=552=3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

export function getPrime(number: number) {
  let index = 2;
  let primeIndex = 1;
  while (true) {
    //   for (let i = 0; i < index; i++) {

    //   }
    if (isPrime(index)) {
      console.log(primeIndex, "nth prime: ", index);
      if (primeIndex === number) {
        return index;
      }
      primeIndex++;
    }
    index += 1;
  }
}
// Possible to improve
function isPrime(n: number) {
  let isPrime = true;
  for (let index = 2; index < (n > 10 ? n / 2 : n); index++) {
    if (n % index === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

export function findPrime() {
  console.log("------------------------------------------------------------");
  console.time("getPrime");
  const result = getPrime(10001);
  console.log("nth prime: ", result);
  console.timeEnd("getPrime");
}
