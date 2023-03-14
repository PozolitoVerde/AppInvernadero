const express = require('express');
const router = express.Router()
const path = 'user'


//Controladores
const loginController = require('../controllers/login')
//Ruta /login get

router.get(
    `${path}/`,
    loginController.getData
)