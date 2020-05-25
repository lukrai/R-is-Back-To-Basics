// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

export function getSmallestDivided() {
  let divideLimit = 1;
  let found = false;
  let index = divideLimit * (divideLimit - 1);

  if (divideLimit === 1) {
    return 1;
  }
  while (!found) {
    let isFound = false;
    console.log(index);
    for (let i = 1; i < divideLimit + 1; i++) {
      if (index % i !== 0) {
        break;
      }
      if (divideLimit === i) {
        return index;
      }
    }

    index += divideLimit * (divideLimit - 1);
  }
}

export function smallestDivided() {
  console.log("------------------------------------------------------------");
  console.time("getSmallestDivided");
  const result = getSmallestDivided();
  console.log("SmallestDivided: ", result);
  console.timeEnd("getSmallestDivided");
}
