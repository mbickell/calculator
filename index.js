document.querySelector("form").addEventListener("submit", event => event.preventDefault());

const calculate = (firstNumber, operator, secondNumber) => {
  let result;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "**":
      result = firstNumber ** secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "//":
      result = Math.sqrt(firstNumber);
      break;

    default:
      result = "Not a valid operator";
      break;
  }

  return result;
};
