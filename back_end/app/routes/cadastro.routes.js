module.exports = app => {
   const cadastros = require("../controller/cadastro.controller.js")

   var router = require("express").Router();

   //criar novo cadastro
   router.post("/", cadastros.adiciona);
   router.post('/login', cadastros.verifica);


   app.use('/api/cadastros', router)
}

//