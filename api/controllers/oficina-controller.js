const mysql = require('../mysql').pool;

exports.getOficina = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from oficina;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmaOficina = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from oficina where id_oficina = ?;',
            [req.params.id_oficina],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado a oficina'
                    })
                }
                const response = {
                    id_oficina: resultado[0].id_oficina,
                    cnpj: resultado[0].cnpj,
                    nome: resultado[0].nome,
                    dono: resultado[0].dono,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postOficina = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into oficina (cnpj, nome, dono, cep) values (?, ?, ?);`,
            [req.body.cnpj ,req.body.nome, req.body.dono],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Oficina inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};