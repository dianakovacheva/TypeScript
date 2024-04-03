function findEvenPosition(inputArray) {
    let foundElements = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            foundElements.push(inputArray[i]);
        }
    }
    console.log(foundElements);
}
findEvenPosition(["20", "30", "40", "50", "60"]);
findEvenPosition(["5", "10"]);
