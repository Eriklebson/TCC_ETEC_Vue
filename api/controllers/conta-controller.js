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
            `insert into conta_site (tipo_conta, email, senha, id_status, id_dono, id_funcionario) values (?, ?, ?, ?, ?, ?);`,
            [req.body.tipo_conta ,req.body.email , md5(req.body.senha) , req.body.id_status , req.body.id_dono , req.body.id_funcionario],
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