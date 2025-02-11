let titulo = document.getElementById("titulo");
titulo.textContent = "¡Bienvenido!";

let textos = document.querySelectorAll(".texto");
textos.forEach(texto => texto.style.color = "blue");

let boton = document.getElementById("boton");
boton.addEventListener("click", () => console.log("Botón clickeado"));