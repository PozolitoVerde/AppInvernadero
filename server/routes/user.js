const express = require("express");
const router = express.Router();
const userSchema = require("../models/user")

//crear Usuario
router.post('/addUsuarios', (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error})); 

});

router.get('/login/:email/:password', (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    userSchema
    user.find({email: { $eq : email}, password: { $eq : password}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error})); 

});


module.exports = router;
