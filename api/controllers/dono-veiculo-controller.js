const mysql = require('../mysql').pool;

exports.getDonoVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from dono_veiculo;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmDonoVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from dono_veiculo where id_dono = ?;',
            [req.params.id_dono],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_dono: resultado[0].id_dono,
                    nome: resultado[0].nome,
                    nascimento: resultado[0].nascimento,
                    cpf: resultado[0].cpf,
                    telefone: resultado[0].telefone,
                    cep: resultado[0].cep,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postDonoVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into dono_veiculo (nome, nascimento, cpf, telefone, cep) values (?, ?, ?, ?, ?);`,
            [req.body.nome ,req.body.nascimento, req.body.cpf, req.body.telefone, req.body.cep],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Dono do veiculo inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};