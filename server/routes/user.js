const express = require("express");
const router = express.Router();
const userSchema = require("../models/user")

//crear Usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error})); 

});
//validacion login
router.get('/users/:email/:password', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
     userSchema
     .find({email: { $eq : email}, password: { $eq : password}})
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error})); 

});

//Investigar KDD, DATAWAREHOUSE, CUBOS Y OLAB
module.exports = router;
