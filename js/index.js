let entrada = document.getElementById("entrada"),
  acept = document.getElementById("acepto"),
  salid = document.getElementById("salida");

let index = 0;
function changeState() {
  index += Number(entrada.value) + 1;
}

console.log(index); // 1

acept.addEventListener("click", () => {
  salid.textContent = changeState();
});
