const express = require('express');
const morgan = require('morgan');
const app = express();
const initDB = require('./config/db')
const userRoutes = require('./routes/user')
//configuracion
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('/inv', userRoutes)
//Empezando el servidor
app.listen(app.get('port'), () =>{
    console.log(`servidor en el puerto ${app.get('port')}`);
});

initDB()