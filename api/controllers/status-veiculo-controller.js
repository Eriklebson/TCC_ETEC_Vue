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
                    status: resultado[0].status,
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
            `insert into status_veiculo (status) values (?);`,
            [req.body.aguardando_peca],
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