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
                    imagem: resultado[0].imagem,
                    tipo: resultado[0].nome,
                    tempo: resultado[0].valor,
                    valor: resultado[0].descricao,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postServicos = (req, res, next)=>{
    console.log(req.file);
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into servicos(imagem, nome, valor, descricao) values (?, ?, ?, ?);`,
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
    console.log(req.file);
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