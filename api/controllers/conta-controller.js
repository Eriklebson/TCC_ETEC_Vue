const mysql = require('../mysql').pool;
const md5 = require('md5');
const multer = require ('multer');

exports.getConta = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from conta_site;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};

exports.getUmaConta = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from conta_site where id_conta = ?;',
            [req.params.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_conta: resultado[0].id_conta,
                    tipo_conta: resultado[0].tipo_conta,
                    nome: resultado[0].nome,
                    email: resultado[0].email,
                    senha: resultado[0].senha,
                    id_status: resultado[0].id_status,
                    id_dono: resultado[0].id_dono,
                    id_funcionario: resultado[0].id_funcionario,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postConta = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into conta_site (tipo_conta, nome, email, senha, id_status, id_dono, id_funcionario) values (?, ?, ?, ?, ?, ?, ?);`,
            [req.body.tipo_conta, req.body.nome, req.body.email, md5(req.body.senha), req.body.id_status, req.body.id_dono, req.body.id_funcionario],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Conta inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};
exports.postAutenticacao = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        const query = `select * from conta_site where email = ?`;
        conn.query(query,[req.body.email], (error, results, fields)=>{
            conn.release();
            if(error){return res.status(500).send({error: error})}
            if(results.length < 1){
                return res.status(401). send({mensagem: 'Falha na autenticação'})
            }
            if(md5(req.body.senha) == results[0].senha){
                return res.status(200).send({
                    mensagem: 'Autenticado com sucesso', 
                    autenticado: true, 
                    id_conta: results[0].id_conta,
                    tipo_conta: results[0].tipo_conta,
                    nome: results[0].nome,
                    email: results[0].email,
                    senha: results[0].senha,
                    id_status: results[0].id_status,
                    id_dono: results[0].id_dono,
                    id_funcionario: results[0].id_funcionario,
                })
            }
            else{
                return res.status(401). send({mensagem: 'Falha na autenticação', autenticado: false})
            }
        })
    });
};