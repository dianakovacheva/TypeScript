function aggregateElements(numArray) {
    let sum = 0;
    let sumOfInverseValues = 0;
    let concatResult = "";
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
        sumOfInverseValues += 1 / numArray[i];
        concatResult += numArray[i];
    }
    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concatResult);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
