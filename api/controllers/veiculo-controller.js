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
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado o veiculo'
                    })
                }
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
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'O cliente não tem carro cadastrado'
                    })
                }
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
exports.deleteVeiculo = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            `delete from veiculo where id_veiculo = ?;`,
            [req.params.id_veiculo],
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