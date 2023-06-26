const filme = require('../model/filme.model.js');

exports.add = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "conteudo não pode ser vazio"
        });
    }
    
    filme.add(req.body, (err, data) => {
        if (err)
        res.status(500).send({
           message:
           err.message || "Algum erro ocorreu enquanto se criava o cadastro"
        }) 
        else res.send(data);

    })

}

exports.get = (req, res) => {
    filme.showAll(req.params.id,(err,data)=> {
        if(err){
            res.status(500).send({
                message: 
                err.nessage || "Some error occurred while retrieving tutorials."
            });
        } 
        else res.send(data);
    })
}

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "conteudo não pode ser vazio"
        });
    }

    
   filme.update(req.params.id, req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message: "Error updating movie with id " + req.params.id
              });
        } 
        else res.send(data);
   });

}

exports.delete = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "conteudo não pode ser vazio"
        });
    }

    filme.delete(req.params.id, (err,data) =>{
        if(err) {
            res.status(500).send({
                message: "Error deleting movie with id " + req.params.id
              });
        } 
        else res.send({ message: `movie was deleted successfully!` });
    })
}