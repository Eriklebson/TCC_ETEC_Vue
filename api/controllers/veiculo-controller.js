const mysql = require('../mysql').pool;

exports.getVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from veiculo;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from veiculo where id_veiculo = ?;',
            [req.params.id_veiculo],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                const response = {
                    id_veiculo: resultado[0].id_veiculo,
                    placa: resultado[0].placa,
                    marca: resultado[0].marca,
                    modelo: resultado[0].modelo,
                    potencia: resultado[0].potencia,
                    ano: resultado[0].ano,
                    cor: resultado[0].cor,
                    id_dono: resultado[0].id_dono,
                }
                return res.status(200).send(response)
            }
        )
    })
};
exports.getVeiculoCliente = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from veiculo where id_conta = ?;',
            [req.params.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.postVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `insert into veiculo (placa, marca, modelo, potencia, ano, cor, id_conta) values (?, ?, ?, ?, ?, ?, ?);`,
            [req.body.placa ,req.body.marca, req.body.modelo, req.body.potencia, req.body.ano ,req.body.cor, req.body.id_conta],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                res.status(201).send({
                    mensagem: 'Veiculo inserido',
                    id_conta: resultado.insertId,
                })
            }
        )
    })
};