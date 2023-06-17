const display = document.querySelector('#display');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let displayValue = '';

function updateDisplay() {
  display.value = displayValue;
}

function appendNumber(number) {
  if (currentOperator == '') {
    firstNumber += number;
    displayValue = firstNumber;
  } else if (currentOperator != '') {
    secondNumber += number;
    displayValue = secondNumber;
  }
  updateDisplay();
}

function clearDisplay() {
  firstNumber = '';
  secondNumber = '';
  currentOperator = '';
  displayValue = '';
  updateDisplay()
}

function setOperator(operator) {
  if (currentOperator != '' && firstNumber != '' && secondNumber != '') {
    calculate();
    firstNumber = display.value;
    secondNumber = '';
  } else {
    firstNumber = displayValue;
  }
  currentOperator = operator;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 0;
  }
}

function calculate() {
  const num1 = firstNumber * 1;
  const num2 = secondNumber * 1;
  const result = operate(currentOperator, num1, num2);
  displayValue = result;
  updateDisplay();
  firstNumber = ``;
  secondNumber = '';
  currentOperator = '';
}
