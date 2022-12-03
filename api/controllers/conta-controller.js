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
                    imagem: resultado[0].imagem,
                    nascimento: resultado[0].nascimento,
                    cpf: resultado[0].cpf,
                    telefone: resultado[0].telefone,
                    id_status: resultado[0].id_status,
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
            `insert into conta_site (tipo_conta, nome, email, senha, imagem, nascimento, cpf, telefone, id_status) values (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
            [req.body.tipo_conta, req.body.nome, req.body.email, md5(req.body.senha), req.body.imagem, req.body.nascimento, req.body.cpf, req.body.telefone, req.body.id_status],
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
                    imagem: results[0].imagem,
                    nascimento: results[0].nascimento,
                    cpf: results[0].cpf,
                    telefone: results[0].telefone,
                    id_status: results[0].id_status,
                })
            }
            else{
                return res.status(401). send({mensagem: 'Falha na autenticação', autenticado: false})
            }
        })
    });
};
exports.patchEditPermision = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `UPDATE conta_site SET tipo_conta = ? WHERE id_conta = 2;`,
            [req.body.tipo_conta, req.params.id_conta],
            (error, resultado, field) => {
                conn.release();
                if(error){return res.status(202).send({error: error})}
                res.status(201).send({
                    mensagem: 'Alteração feita com sucesso',
                })
            }
        )
    })
};