const mysql = require('../mysql').pool;

exports.getServicos = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from servicos;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmServicos = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from servicos where id_servico = ?;',
            [req.params.id_servico],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_servico: resultado[0].id_servico,
                    tipo: resultado[0].tipo,
                    tempo: resultado[0].tempo,
                    valor: resultado[0].valor,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postServicos = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into servicos (tipo, tempo, valor) values (?, ?, ?);`,
            [req.body.tipo ,req.body.tempo, req.body.valor],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Serviço inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};