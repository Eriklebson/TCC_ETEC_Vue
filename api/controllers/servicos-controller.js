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
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado o serviço'
                    })
                }
                const response = {
                    id_servico: resultado[0].id_servico,
                    imagem: resultado[0].imagem,
                    nome_servico: resultado[0].nome_servico,
                    descricao: resultado[0].descricao,
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
            `insert into servicos(imagem, nome_servico, valor, descricao) values (?, ?, ?, ?);`,
            [req.file.filename, req.body.nome ,req.body.valor, req.body.descricao],
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
exports.deleteServico = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `delete from servicos where id_servico = ?;`,
            [req.params.id_servico],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Serviço Deletado',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};