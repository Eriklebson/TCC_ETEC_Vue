const mysql = require('../mysql').pool;

exports.getFuncionario = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from funcionario;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmaFuncionario = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from funcionario where id_funcionario = ?;',
            [req.params.id_funcionario],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_funcionario: resultado[0].id_funcionario,
                    funcao: resultado[0].funcao,
                    nome: resultado[0].nome,
                    cpf: resultado[0].cpf,
                    data_admissao: resultado[0].data_admissao,
                    horario_turno: resultado[0].horario_turno,
                    telefone: resultado[0].telefone,
                    cep: resultado[0].cep,
                    id_oficina: resultado[0].id_oficina,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.postFuncionario = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into funcionario (funcao, nome, cpf, data_admissao, horario_turno, telefone, cep, id_oficina) values (?, ?, ?, ?, ?, ?, ?, ?);`,
            [req.body.funcao ,req.body.nome, req.body.cpf , req.body.data_admissao, req.body.horario_turno ,req.body.telefone, req.body.cep , req.body.id_oficina],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Funcionario inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};