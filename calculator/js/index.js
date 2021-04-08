const calculate = document.getElementById("calculate");
const a = document.getElementById("num1"),
  b = document.getElementById("num2"),
  result = document.getElementById("result");

const operator = document.getElementById("operator");

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
    a.value + Symbol + b.value + " = " + calc(Number(a.value), Number(b.value));
});
