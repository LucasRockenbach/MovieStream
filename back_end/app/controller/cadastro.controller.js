const Login = require('../model/cadastro.model.js')
//

exports.adiciona = (req, res) => {

   if(!req.body){
      res.status(400).send({
         message: "Conteudo não pode ser vazio"
      });
   }

      Login.adiciona(req.body, (err, data) =>{
         if (err)
            res.status(500).send({
               message:
               err.message || "Algum erro ocorreu enquanto se criava o cadastro"
            })
         else res.send(data);
      })
   

};

exports.verifica = (req, res) => {
   if(!req.body){
      res.status(400).send({
         message: "Conteudo não pode ser vazio"
      });
   }

   const {email , password } = req.body

   Login.verifica(email, password, (err,data) =>{
      if(err)
      res.status(500).send({
         message:
         err.message || "Ocorreu um erro ao verificar o usuário."
      })

      if(!data) {
         return res.status(401).json({ error: 'Credenciais inválidas.' });
      }
      
      else res.send(data);
   })
}

/* module.exports = app => {
    app.get(rota, (req, res) => {
       // retorna os dados??
       Login.lista(res)
    })
    app.get((rota+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Login.buscaPorId(id, res)
    })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Login.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Login.altera(id, valores, res)
    })
 }

 */