const mysql = require('../mysql').pool;

exports.getOrdemServico = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from ordem_servico;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmOrdemServico = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from ordem_servico where id_ordem = ?;',
            [req.params.id_ordem],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_ordem: resultado[0].id_ordem,
                    data_abertura: resultado[0].data_abertura,
                    previsao_entrega: resultado[0].previsao_entrega,
                    id_veiculo: resultado[0].id_veiculo,
                    id_funcionario: resultado[0].id_funcionario,
                    id_servico: resultado[0].id_servico,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postOrdemServico = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into ordem_servico (data_abertura, previsao_entrega, id_veiculo, id_funcionario, id_servico) values (?, ?, ?, ?, ?);`,
            [req.body.data_abertura ,req.body.previsao_entrega, req.body.id_veiculo, req.body.id_funcionario, req.body.id_servico],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Ordem de serviço inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};