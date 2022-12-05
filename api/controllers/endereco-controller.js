const mysql = require('../mysql').pool;

exports.getEndereco = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from endereco;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmEndereco = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from endereco where id_endereco = ?;',
            [req.params.id_endereco],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado o endereco'
                    })
                }
                const response = {
                    id_endereco: resultado[0].id_endereco,
                    cep: resultado[0].cep,
                    identificacao: resultado[0].identificacao,
                    logradouro: resultado[0].logradouro,
                    numero: resultado[0].numero,
                    complemento: resultado[0].complemento,
                    referencia: resultado[0].referencia,
                    bairro: resultado[0].bairro,
                    cidade: resultado[0].cidade,
                    uf: resultado[0].uf,
                    id_conta: resultado[0].id_conta,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.getClienteEndereco = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from endereco where id_conta = ?;',
            [req.params.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'Usuario não tem endereco cadastrado',
                        status: false
                    })
                }
                const response = {
                    id_endereco: resultado[0].id_endereco,
                    cep: resultado[0].cep,
                    identificacao: resultado[0].identificacao,
                    logradouro: resultado[0].logradouro,
                    numero: resultado[0].numero,
                    complemento: resultado[0].complemento,
                    referencia: resultado[0].referencia,
                    bairro: resultado[0].bairro,
                    cidade: resultado[0].cidade,
                    uf: resultado[0].uf,
                    id_conta: resultado[0].id_conta,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postEndereco = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into endereco (cep, identificacao, logradouro, numero, complemento, referencia, bairro, cidade, uf, id_conta) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
            [req.body.cep ,req.body.identificacao, req.body.logradouro, req.body.numero, req.body.complemento ,req.body.referencia, req.body.bairro, req.body.cidade ,req.body.uf, req.body.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Endereço inserido',
                    id_conta: resultado.insertId,
                    status: true,
                })
            }
        )
    })
};