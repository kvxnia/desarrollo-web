let lista = document.getElementById("tareas");
let nuevaTarea = document.getElementById("nuevaTarea");
let agregar = document.getElementById("agregar");
let eliminar = document.getElementById("eliminar");

agregar.addEventListener("click", () => {
  if (nuevaTarea.value) {
    let li = document.createElement("li");
    li.textContent = nuevaTarea.value;
    lista.appendChild(li);
    nuevaTarea.value = "";
  }
});

eliminar.addEventListener("click", () => {
  let ultimaTarea = lista.lastElementChild;
  if (ultimaTarea) {
    lista.removeChild(ultimaTarea);
  }
});