// const myName = (name, salute) => `${salute}, ${name}`;

// const mySalute = myName();
// console.log(myName("Ivan"));
// const concat = (a, b) => `${a} ${b}`
// const greeting = (greet, name) => concat(greet, name)
// const greet = (name) => greeting("Hola", name)

// const concat = (a, b) => `${a} ${b}`;
// const greeting = (greet, name) => concat(greet, name);
// const greet = (name) => greeting("Hola", name);
// console.log()
// console.log(greet("Ivan"));

// const concat = (num1, num2) => num1 + num2;
// // const sumando = (x, y) => concat(x, y);
// // const suma = (x, y) => sumando(x, y);
// console.log(concat(5, 6));

// function operation(num1, num2) {
//   return num1 + num2;
// }
// console.log(operation(5, 5));

function outer_func() {
  let message = "Hola";
  return function inner_func() {
    console.log(message);
  };
}
outer_func();//osea porque no solamente 1

console.log(outer_func();
//si comprendo algo

