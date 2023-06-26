const express = require("express");
const cors =  require("cors");

const app  = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rota simples

require("./app/routes/cadastro.routes.js")(app);
require("./app/routes/filme.routes.js")(app);
require("./app/controller/rating.js")(app);
require("./app/controller/genero,contoller.js")(app);


const PORT = process.env.PORT || 8000;
app.listen(PORT,  () =>{
    console.log(`Server is running on port ${PORT}`);
})


