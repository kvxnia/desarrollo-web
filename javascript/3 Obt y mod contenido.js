let parrafo = document.getElementById("parrafo");
let entrada = document.getElementById("entrada");
let boton = document.getElementById("cambiar");

console.log(parrafo.textContent);

boton.addEventListener("click", () => {
  parrafo.textContent = entrada.value;
});