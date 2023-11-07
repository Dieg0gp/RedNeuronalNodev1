const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://diegogupa:rRWKGNvUeWeMKJng@cluster0.kjtpgpi.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect(); // Conectarse a la base de datos
    console.log("Conexión Exitosa");

    const database = client.db('estadoAnimo');
    const collection = database.collection('usuario');

    // Consulta para buscar todos los documentos en la colección 'usuario'
    const result = await collection.find({}).toArray();

    // Mostrar los datos en la consola
    console.log("Datos de usuarios:");
    console.log(result);    
  } finally {
    // Asegura que el cliente se cierre cuando hayas terminado o si ocurre un error
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

