const sql = require("./db.js")
//
class Cadastro{
    
    adiciona(login, resultado){
        sql.query("INSERT INTO users SET ?",login,(erro, res)=> {
            if(erro){
                console.log("error: ", erro);
                resultado(erro, null);
                return;
            }

            console.log("created cadastro: " ,{id: res.insertId, ...login});
            resultado(null, {id: res.insertId, ...login});
        })
    }

    verifica(email, password, resultado){
        sql.query("SELECT userID FROM users WHERE email = ? AND password = ?", [email, password], (erro, res) => {
            if(erro){
                console.log('error:', erro);
                resultado(erro, null);
                return;
            }

            if(res.length === 0) {
                console.log("resultado vazio da consulta");
                resultado(null);
            } else {
                console.log(res);
                resultado(null, res);
            }

           
            
        })
    }

    
    lista(res){
        const sql = 'SELECT * FROM usuario'
        conexao.query(sql, (erro, resultado) => {
            if(erro){res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)}})
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM usuario WHERE idusuario=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    
    altera(id, valores, res){
        let sql = 'UPDATE usuario SET ? WHERE idusuario = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}

module.exports = new Cadastro;