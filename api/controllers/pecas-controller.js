const mysql = require('../mysql').pool;

exports.getPecas = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from pecas;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmPecas = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from pecas where id_peca = ?;',
            [req.params.id_servico],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_peca: resultado[0].id_peca,
                    marca: resultado[0].marca,
                    codigo: resultado[0].codigo,
                    tipo: resultado[0].tipo,
                    preco: resultado[0].preco,
                    id_teste: resultado[0].id_teste,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postPecas = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into pecas (marca, codigo, tipo, preco, id_teste) values (?, ?, ?, ?, ?);`,
            [req.body.marca, req.body.codigo, req.body.tipo, req.body.preco, req.body.id_teste],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Peças inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};