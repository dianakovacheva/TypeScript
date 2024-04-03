function sumNumbers(n, m) {
    let sum = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sumNumbers("1", "5");
