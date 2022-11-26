const express = require('express');
const router = express.Router();

const veiculoController = require('../controllers/veiculo-controller');

router.get('/', veiculoController.getVeiculo);
router.get('/:id_teste', veiculoController.getUmVeiculo);
router.post('/', veiculoController.postVeiculo);


module.exports = router;