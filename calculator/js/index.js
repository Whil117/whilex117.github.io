const calculate = document.getElementById("calculate"),
  numberOne = document.getElementById("number1"),
  numberTwo = document.getElementById("number2"),
  result = document.getElementById("result"),
  operator = document.getElementById("operator"),
  clean = document.getElementById("clean");

const operations = {
  add: [(a, b) => a + b, " + "],
  min: [(a, b) => a - b, " - "],
  div: [(a, b) => a / b, " / "],
  mul: [(a, b) => a * b, " * "],
  pow: [(a, b) => a ** b, " ^ "],
};

calculate.addEventListener("click", () => {
  const [calc, Symbol] = operations[operator.value];
  result.textContent =
    numberOne.value +
    Symbol +
    numberTwo.value +
    " = " +
    calc(Number(numberOne.value), Number(numberTwo.value));
});

clean.addEventListener("click", () => {
  const cleaner = () => "";
  result.textContent = cleaner();
});
