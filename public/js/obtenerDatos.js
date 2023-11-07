//ip
let ip = "";
fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {
  const ipAddress = data.ip;
  ip = ipAddress;
})
.catch(error => console.error(error));
//obtener datos
let animalSeleccionado = "";

document.getElementById("perro").addEventListener("click", function () {
  animalSeleccionado = "perro";
});

document.getElementById("gato").addEventListener("click", function () {
  animalSeleccionado = "gato";
});

document.getElementById("like").addEventListener("click", function () {
  const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
  const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
  const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
  const jokeTextColorHex = rgbToHex(jokeTextColor);
  const jokeText = document.getElementById("joke").textContent;
  const datosUsuario = obtenerDatosUsuario();
  const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
  const fechaHora = new Date();
  const horaActual = fechaHora.getHours() + ":" + fechaHora.getMinutes() + ":" + fechaHora.getSeconds();
  alert("Tu ip es: " + ip + "\nEl color de fondo del body es " + bodyBackgroundColorHex 
        + "\nEl color de texto del chiste es " + jokeTextColorHex + "\nHiciste clic en el " 
        + animalSeleccionado + " y te gusta" + "\nLa hora y Fecha: " + horaActual + "\n Chiste: " + jokeText
        + "\nEstado de Animo:" + estadoAnimo);
        const respuestaBoton = "le gusta";
        // Llamar a la función para guardar los datos en la base de dato
        guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo);
});

document.getElementById("dislike").addEventListener("click", function () {
  const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
  const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
  const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
  const jokeTextColorHex = rgbToHex(jokeTextColor);
  const jokeText = document.getElementById("joke").textContent;
  const datosUsuario = obtenerDatosUsuario();
  const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
  const fechaHora = new Date();
  const horaActual = fechaHora.getHours() + ":" + fechaHora.getMinutes() + ":" + fechaHora.getSeconds();
  alert("Tu ip es: " + ip + "\nEl color de fondo del body es " + bodyBackgroundColorHex 
        + "\nEl color de texto del chiste es " + jokeTextColorHex + "\nHiciste clic en el " 
        + animalSeleccionado + " y no te gusta"+ "\nLa hora y Fecha: " + horaActual + "\n Chiste: " + jokeText
        + "\n Estado de Animo: " + estadoAnimo);
        const respuestaBoton = "no le gusta";
        guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo);
});

function rgbToHex(rgb) {
  const values = rgb.match(/\d+/g);
  const hexValues = values.map(value => {
    const hexValue = Number(value).toString(16);
    return hexValue.length === 1 ? "0" + hexValue : hexValue;
  });
  return "#" + hexValues.join("");
}

//
/*
    Reglas del estado de animo
*/
//
function obtenerDatosUsuario() {
    const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
    const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
    const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
    const jokeTextColorHex = rgbToHex(jokeTextColor);
    const animalPreferido = document.getElementById("perro").classList.contains("seleccionado") ? "perro" : "gato";
    return {
      colorFondo: bodyBackgroundColorHex,
      colorTexto: jokeTextColorHex,
      animalPreferido: animalPreferido
    };
  }
  
  function obtenerEstadoAnimo(datosUsuario) {
    const coloresAlegres = ["red", "orange", "yellow"];
    const coloresTristes = ["blue", "indigo", "violet"];
    const esAlegre = coloresAlegres.includes(datosUsuario.colorFondo) && datosUsuario.colorTexto === "#008000" && datosUsuario.animalPreferido === "perro";
    const esTriste = coloresTristes.includes(datosUsuario.colorFondo) && datosUsuario.colorTexto === "#FFFFFF" && datosUsuario.animalPreferido === "gato";
    if (esAlegre) {
      return "alegre";
    } else if (esTriste) {
      return "triste";
    } else {
      return "neutral";
    }
  }

/* base de datos */
async function guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo) {
  alert("Los datos a guardar son:" + "\n" +
  `IP: ${ip}\n` +
  `Fondo: ${bodyBackgroundColorHex}\n` +
  `Color: ${jokeTextColorHex}\n` +
  `Mascota: ${animalSeleccionado}\n` +
  `Botón: ${respuestaBoton}\n` +
  `Hora: ${horaActual}\n` +
  `Chiste: ${jokeText}\n` +
  `Ánimo: ${estadoAnimo}`);
}