let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'



const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
  calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
    console.log('ini prev ' + prevNumber);
    console.log('ini current ' + currentNumber);
    console.log('ini operator ' + calculationOperator);
  });
});

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number
  }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    console.log('ini adalah operator ' + calculationOperator);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
  calculate()
  updateScreen(currentNumber)
});

const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break
    case "-":
      result = prevNumber - currentNumber
      break
    case "*":
      result = prevNumber * currentNumber
      break
    case "/":
      result = prevNumber / currentNumber
      break
    default:
      break
  }

  currentNumber = result
  calculationOperator = ''
}

const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
  console.log('tombol clear di click ' + currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  currentNumber = '0';
  calculationOperator = '';
}

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot;
}

const persentage = document.querySelector('.percentage');

persentage.addEventListener('click', () => {
  persentageNumber();
  updateScreen(currentNumber);
  console.log('ini adalah persen');
});


const persentageNumber = () => {
  if (currentNumber === '0') {
    return;
  }
  currentNumber = currentNumber / 100;
}
