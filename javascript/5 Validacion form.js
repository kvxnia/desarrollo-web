let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;

  if (!nombre) {
    mensaje.textContent = "El nombre es obligatorio.";
    mensaje.style.color = "red";
  } else if (!email.includes("@")) {
    mensaje.textContent = "El email no es válido.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Formulario enviado con éxito.";
    mensaje.style.color = "green";
  }
});