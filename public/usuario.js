import mongoose from 'mongoose';
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    ip: String,
    fondo: String,
    color: String,
    mascota: String,
    boton: String,
    hora: String,
    chiste: String,
    animo: String
})

//crear modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;