const mysql = require('../mysql').pool;

exports.getLogradouro = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from logradouro;',
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                return res.status(200).send(resultado)
            }
        )
    })
};
exports.getUmLogradouro = (req, res, next)=>{
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'select * from logradouro where cep = ?;',
            [req.params.cep],
            (error, resultado, fields) => {
                if(error){return res.status(500).send({error: error})}
                if(resultado.length == 0){
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado o logradouro'
                    })
                }
                const response = {
                    CEP: resultado[0].CEP,
                    id_logradouro: resultado[0].id_logradouro,
                    tipo: resultado[0].tipo,
                    descricao: resultado[0].descricao,
                    id_cidade: resultado[0].id_cidade,
                    UF: resultado[0].UF,
                    complemento: resultado[0].complemento,
                    descricao_sem_numero: resultado[0].descricao_sem_numero,
                    descricao_cidade: resultado[0].descricao_cidade,
                    codigo_cidade_ibge: resultado[0].codigo_cidade_ibge,
                    descricao_bairro: resultado[0].descricao_bairro,
                }
                return res.status(200).send(response)
            }
        )
    })
};