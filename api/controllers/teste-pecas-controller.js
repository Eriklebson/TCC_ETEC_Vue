const mysql = require('../mysql').pool;

exports.getTestePecas = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from teste_peca;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmTestePecas = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from teste_peca where id_teste = ?;',
            [req.params.id_teste],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_teste: resultado[0].id_teste,
                    tipo_peca: resultado[0].tipo_peca,
                    valor_min_aceito: resultado[0].valor_min_aceito,
                    valor_max_aceito: resultado[0].valor_max_aceito,
                    valor_contado: resultado[0].valor_contado,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postTestePecas = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into teste_peca (tipo_peca, valor_min_aceito, valor_max_aceito, valor_contado) values (?, ?, ?, ?);`,
            [req.body.tipo_peca ,req.body.valor_min_aceito, req.body.valor_max_aceito, req.body.valor_contado],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Teste de pecas inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};