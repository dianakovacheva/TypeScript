function calc(first, operator, second) {
    let result = null;
    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "/":
            result = first / second;
            break;
        case "*":
            result = first * second;
            break;
        default:
            result = "Not a valid operator.";
            break;
    }
    if (typeof result === "number") {
        result = result.toFixed(2);
    }
    return result;
}
console.log(calc(5, "+", 10));
console.log(calc(25.5, "-", 3));
console.log(calc(25.5, "&", 3));
