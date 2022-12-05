const express = require('express');
const router = express.Router();

const veiculoController = require('../controllers/veiculo-controller');

router.get('/', veiculoController.getVeiculo);
router.get('/:id_veiculo', veiculoController.getUmVeiculo);
router.get('/cliente/:id_conta', veiculoController.getVeiculoCliente);
router.post('/', veiculoController.postVeiculo);


module.exports = router;