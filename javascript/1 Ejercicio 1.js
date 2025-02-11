let nombre = "Juan";
let edad = 25;
let esEstudiante = true;
let hobbies = ["leer", "correr", "programar"];

console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof esEstudiante); // boolean
console.log(typeof hobbies); // object

console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años, y mis hobbies son ${hobbies.join(", ")}.`);