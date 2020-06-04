const form = document.querySelector("form");

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

form.addEventListener("submit", event => {
  event.preventDefault();

  const firstNumberString = document.querySelector("#first-number").value;
  const firstNumber = parseFloat(firstNumberString);
  const operator = document.querySelector("#operator").value;
  const secondNumberString = document.querySelector("#second-number").value;
  const secondNumber = parseFloat(secondNumberString);

  const result = calculate(firstNumber, operator, secondNumber);

  document.querySelector("#result").innerHTML = result;
});
