const mongoose = require('mongoose');

// URL de conexión a la base de datos
const url = 'mongodb://localhost:27017/testInv';

// Opciones de conexión
const options = {
    keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Conectar a la base de datos
module.exports = () =>{
        mongoose.connect(url, options)
        .then(() => console.log('Conexión exitosa a MongoDB'))
        .catch(err => console.log('Error al conectar a MongoDB:', err));
    }

 