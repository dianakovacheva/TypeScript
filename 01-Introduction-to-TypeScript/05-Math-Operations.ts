function printResult(firstNum: number, secondNum: number, operand: string) {
  // '+', '-', '*', '/', '%', '**'
  let result: number = 0;
  switch (operand) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    case "%":
      result = firstNum % secondNum;
      break;
    case "**":
      result = Math.pow(firstNum, secondNum);
      break;
    default:
      break;
  }
  console.log(result);
}

printResult(5, 6, "+");
printResult(3, 5.5, "*");
