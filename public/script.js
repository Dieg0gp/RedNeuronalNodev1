const coloresArcoiris = [
  "red", 
  "orange", 
  "yellow", 
  "green", 
  "blue", 
  "indigo", 
  "violet"];
const chistes = [
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Cómo se dice pañuelo en japonés? Saka-moko",
  "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter",
  // coloquen más chistes
];

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body; // Obtén el elemento body
    const container = document.getElementById("container");
    const jokeElement = document.getElementById("joke");
  
    const randomBackgroundColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
    body.style.backgroundColor = randomBackgroundColor; // Cambia el fondo del body

    const randomContainerColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
    container.style.backgroundColor = randomContainerColor; // Cambia el fondo del contenedor
  
    const randomTextColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
    jokeElement.style.color = randomTextColor;
  
    const randomJoke = chistes[Math.floor(Math.random() * chistes.length)];
    jokeElement.textContent = randomJoke;
  });
  
