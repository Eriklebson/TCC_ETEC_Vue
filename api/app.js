const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaConta =  require('./routes/conta');
const rotaOficina = require('./routes/oficina');
const rotaStatusVeiculo = require('./routes/status-veiculo');
const rotaServicos = require('./routes/servicos');
const rotaDonoVeiculo = require('./routes/dono-veiculo');
const rotaFuncionario = require('./routes/funcionario');
const rotaOrdemServico = require('./routes/ordem-servico');
const rotaPecas = require('./routes/pecas');
const rotaTestePecas = require('./routes/teste-pecas');
const rotaVeiculos = require ('./routes/veiculos');

app.use(morgan('dev'));
app.use('/img', express.static('img'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }

    next();
})

app.use('/contas', rotaConta);
app.use('/oficinas', rotaOficina);
app.use('/statusveiculo', rotaStatusVeiculo);
app.use('/servicos', rotaServicos);
app.use('/donoveiculo', rotaDonoVeiculo);
app.use('/funcionario', rotaFuncionario);
app.use('/ordemservico', rotaOrdemServico);
app.use('/pecas', rotaPecas);
app.use('/testepecas', rotaTestePecas);
app.use('/veiculos', rotaVeiculos);

app.use((req, res, next) =>{
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro:{
            mensagem: error.mensagem
        }
    })
})

module.exports = app;