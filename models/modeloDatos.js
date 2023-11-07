const mongoose = require('mongoose');

const datosSchema = new mongoose.Schema({
  ip: String,
  colorFondo: String,
  colorTexto: String,
  animalPreferido: String,
  estadoAnimo: String,
  fechaHora: Date,
  chiste: String,
  accion: String,
});

const Datos = mongoose.model('Datos', datosSchema);

module.exports = Datos;
