// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

export function getLargestPolindrome() {
  let polindrome = 0;

  for (let i = 9000; i > 0; i--) {
    for (let j = 10999; j > 0; j--) {
      const number = i * j;
      const stringified = number.toString();
      if (stringified.length % 2 !== 0) {
        break;
      }

      let startIndex = 0;
      let endIndex = stringified.length - 1;
      // console.log(
      //   "---------------------------------------------------------------------"
      // );
      // console.log("i: ", i, "j: ", j);
      // console.log(number);
      while (startIndex < endIndex) {
        if (stringified[startIndex] === stringified[endIndex]) {
          startIndex += 1;
          endIndex -= 1;
        } else {
          break;
        }
        if (startIndex > endIndex) {
          polindrome = number;
          return polindrome;
        }
      }
    }
  }
}

export function getLargestPolindromeSimplified() {
  let polindrome = 0;

  for (let i = 9000; i > 0; i--) {
    for (let j = 10999; j > 0; j--) {
      const number = i * j;
      const stringified = number.toString();
      if (stringified.length % 2 !== 0) {
        break;
      }
      const reversed = stringified.split("").reverse().join("");
      // console.log(
      //   "---------------------------------------------------------------------"
      // );
      // console.log("i: ", i, "j: ", j);
      // console.log("stringified ", stringified, "reversed ", reversed);
      // console.log("number ", number);
      if (reversed === stringified) {
        return number;
      }
    }
  }
}

export function largestPolindrome() {
  console.log("------------------------------------------------------------");
  console.time("getLargestPolindrome");
  const result = getLargestPolindrome();
  console.log("Largest Polindrome: ", result);
  console.timeEnd("getLargestPolindrome");

  console.time("getLargestPolindromeSimplified");
  const result2 = getLargestPolindromeSimplified();
  console.log("Largest Polindrome: ", result2);
  console.timeEnd("getLargestPolindromeSimplified");
}
