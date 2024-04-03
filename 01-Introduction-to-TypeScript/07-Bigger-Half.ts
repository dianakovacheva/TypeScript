function sortArray(numArray: number[]) {
  let sortedArray: number[] = numArray.sort((a, b) => a - b);
  let resultArray: number[] = [];
  if (sortedArray.length % 2 !== 0) {
    resultArray = sortedArray.splice(Math.floor(sortedArray.length / 2));
  } else {
    resultArray = sortedArray.splice(Math.floor(sortedArray.length / 2));
  }
  console.log(resultArray);
}

sortArray([4, 7, 2, 5]);
sortArray([3, 19, 14, 7, 2, 19, 6]);
