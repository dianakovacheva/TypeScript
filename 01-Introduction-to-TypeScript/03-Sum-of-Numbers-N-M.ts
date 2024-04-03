function sumNumbers(n: string, m: string) {
  let sum: number = 0;
  for (let i = Number(n); i <= Number(m); i++) {
    sum = sum + i;
  }
  console.log(sum);
}

sumNumbers("1", "5");
