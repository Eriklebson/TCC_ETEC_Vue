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
                    files: resultado[0].files,
                    status: resultado[0].status,
                    informacoes: resultado[0].informacoes,
                    id_veiculo: resultado[0].id_veiculo,
                    id_servico: resultado[0].id_servico,
                    id_conta: resultado[0].id_conta,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.getServicos = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `select * from ordem_servico right join servicos on ordem_servico.id_servico = servicos.id_servico right join conta_site on ordem_servico.id_conta = conta_site.id_conta where ordem_servico.status != 5;`,
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getServicosFinalizados = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `select * from ordem_servico right join servicos on ordem_servico.id_servico = servicos.id_servico right join conta_site on ordem_servico.id_conta = conta_site.id_conta where ordem_servico.status = 5;`,
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getClienteAgenda = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `select * from ordem_servico right join servicos on ordem_servico.id_servico = servicos.id_servico right join conta_site on ordem_servico.id_conta = conta_site.id_conta where conta_site.id_conta = ? and ordem_servico.status != 5;`,
            [req.params.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getServicoFinalizado = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `select * from ordem_servico right join servicos on ordem_servico.id_servico = servicos.id_servico right join conta_site on ordem_servico.id_conta = conta_site.id_conta where conta_site.id_conta = ? and ordem_servico.status = 5;`,
            [req.params.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.postOrdemServico = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into ordem_servico (data_abertura, previsao_entrega, files, status, informacoes, id_veiculo, id_servico, id_conta) values (?, ?, ?, ?, ?, ?, ?, ?);`,
            [req.body.data_abertura ,req.body.previsao_entrega, req.body.files, req.body.status, req.body.informacoes, req.body.id_veiculo, req.body.id_servico, req.body.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Ordem de serviço inserido',
                    id_conta: resultado.insertId,
                    status: true,
                })
            }
        )
    })
};
exports.patchOrdemServico = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `UPDATE ordem_servico SET status = ?, informacoes = ? WHERE id_ordem = ?;`,
            [req.body.status, req.body.informacoes, req.params.id_ordem],
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