const express = require('express');
const router = express.Router();

const statusVeiculoController = require('../controllers/status-veiculo-controller')

router.get('/', statusVeiculoController.getStatusVeiculo);
router.get('/:id_status', statusVeiculoController.getUmStatusVeiculo);
router.post('/', statusVeiculoController.postStatusVeiculo)


module.exports = router;