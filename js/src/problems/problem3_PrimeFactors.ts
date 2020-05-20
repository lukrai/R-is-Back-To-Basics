// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

export function primeFactors() {
  let target = 600851475143;
  let primeNumber = 1;
  let prevPrimeNumber = primeNumber;

  while (target > 1) {
    prevPrimeNumber = primeNumber;
    for (let i = 2; i < target; i++) {
      if (target % i === 0) {
        primeNumber = i;
        break;
      }
    }
    console.log("-------------------");
    console.log("prevPrimeNumber: ", prevPrimeNumber);
    console.log("primeNumber: ", primeNumber);
    console.log("target: ", target);

    if (target % primeNumber === 0) {
      target = target / primeNumber;
    }
    if (prevPrimeNumber === primeNumber) {
      break;
    }
  }

  console.log("The largest prime ", target);
}
