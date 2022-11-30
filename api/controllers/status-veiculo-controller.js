const mysql = require('../mysql').pool;

exports.getStatusVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from status_veiculo;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmStatusVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from status_veiculo where id_status = ?;',
            [req.params.id_status],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_status: resultado[0].id_status,
                    aguardando_peca: resultado[0].aguardando_peca,
                    em_fase_teste: resultado[0].em_fase_teste,
                    concluido: resultado[0].concluido,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postStatusVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into status_veiculo (aguardando_peca, em_fase_teste, concluido) values (?, ?, ?);`,
            [req.body.aguardando_peca ,req.body.em_fase_teste, req.body.concluido],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Status Veiculo inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};