// Variables to store the calculator state
let displayValue = "";
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
const display = document.getElementById("display");

// Function to update the display
function updateDisplay() {
  display.value = displayValue;
}

// Function to append a value to the display
function appendToDisplay(value) {
  // If the value is an operator, handle it differently
  if (["+", "-", "*", "/"].includes(value)) {
    // If an operator is already set, calculate the result first
    if (currentOperator && firstNumber !== null) {
      secondNumber = parseFloat(displayValue);
      displayValue = operate(
        currentOperator,
        firstNumber,
        secondNumber
      ).toString();
      firstNumber = parseFloat(displayValue);
      secondNumber = null;
    } else {
      firstNumber = parseFloat(displayValue);
    }
    currentOperator = value;
    displayValue = "";
  } else {
    // Append the number or decimal point to the display value
    displayValue += value;
  }
  updateDisplay();
}

// Function to clear the display and reset the calculator state
function clearDisplay() {
  displayValue = "";
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
  updateDisplay();
}

// Function to perform the calculation when equals is pressed
function calculate() {
  if (currentOperator && firstNumber !== null) {
    secondNumber = parseFloat(displayValue);
    displayValue = operate(
      currentOperator,
      firstNumber,
      secondNumber
    ).toString();
    firstNumber = parseFloat(displayValue);
    secondNumber = null;
    currentOperator = null;
  }
  updateDisplay();
}

// Basic arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by 0";
  }
  return a / b;
}

// Function to operate based on the operator
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}
