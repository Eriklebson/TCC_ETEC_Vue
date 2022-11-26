const express = require('express');
const router = express.Router();

const donoVeiculoController = require('../controllers/dono-veiculo-controller')

router.get('/', donoVeiculoController.getDonoVeiculo);
router.get('/:id_dono', donoVeiculoController.getUmDonoVeiculo);
router.post('/', donoVeiculoController.postDonoVeiculo);

module.exports = router;