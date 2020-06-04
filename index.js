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
    case "^":
      result = firstNumber ** secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "//":
      result = Math.sqrt(firstNumber);
      break;
    case "√":
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

// Using button display

const display = document.querySelector("#display");
const previous = document.querySelector("#previous");
const operators = document.querySelectorAll("#operators button");
const numbers = document.querySelectorAll("#numbers button");
const equals = document.querySelector("#equals");

console.log(operators, numbers);

let values = ["", "", ""];

operators.forEach(operator => {
  if (operator.innerHTML !== "=") {
    operator.addEventListener("click", event => {
      values[1] = event.target.innerHTML;
      previous.innerHTML = values.join(" ");
    });
  }
});

numbers.forEach(number => {
  number.addEventListener("click", event => {
    if (!values[1]) {
      values[0] += parseInt(event.target.innerHTML);
    } else {
      values[2] += parseInt(event.target.innerHTML);
    }
    previous.innerHTML = values.join(" ");
  });
});

equals.addEventListener("click", () => {
  display.innerHTML = calculate(parseInt(values[0]), values[1], parseInt(values[2]));
  previous.innerHTML = values.join(" ");
  values = ["", "", ""];
});
