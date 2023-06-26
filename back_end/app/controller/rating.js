const Rating = require('../model/rating')
const rota = '/rating'
const rota2 = '/review'
module.exports = app => {
    app.get(rota+'/:id', (req, res) => {
       // retorna os dados??
       let id = req.params.id;
       Rating.lista(id,res)
    })
    app.get(rota2+'/:id', (req, res) => {
      // retorna os dados??
      let id = req.params.id;
      Rating.buscaPorId(id,res)
   })


    app.post(rota, (req, res) => {
       console.log(req.body)
       Rating.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.put((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Rating.altera(id, valores, res)
    })

    app.delete(rota+'/:id', (req, res)=>{

      Rating.deleta(req.params.id, res)
  }) 

 }