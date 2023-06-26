const genero = require('../model/genero,model.js')
const rout = '/genero'

module.exports = app => {
    //adicina o metodo para pegar do banco de dados
    app.get(rout+'/:id', (req, res) =>{
        genero.lista(req.params.id, res)
        res.send({message: "problema"});
    })
    //adiciona ao banco de dados
    app.post(rout, (req, res) =>{
        console.log(req.body)
        genero.adiciona(req.body, res)
    })
    //adiciona o metodo de deletar(deleta o objeto pelo id) 
    app.delete(rout+'/:id', (req, res)=>{
        if(!req.body){
            res.status(400).send({
                message: "conteudo não pode ser vazio" //caso o conteudo para ser deletado estiver null
            });
        }
        genero.delete(req.params.id, res)
    }) 
    //adiciona o metodo de alterar(busca o metodo pelo id do objeto)
    app.patch((rout+'/:id'),(req, res) =>{
        let id = parseInt(req.params.id)
        let mudaTd = req.body
        genero.altera(id, valores, res)
     })
}