function findLargesNum(firstNum: number, secondNum: number, thirdNum: number) {
  let currLargestNum: number = firstNum;
  if (secondNum > currLargestNum) {
    currLargestNum = secondNum;
    console.log(`The largest number is ${currLargestNum}.`);
  } else if (thirdNum > currLargestNum) {
    currLargestNum = thirdNum;
    console.log(`The largest number is ${currLargestNum}.`);
  }
}

findLargesNum(5, -3, 16);
