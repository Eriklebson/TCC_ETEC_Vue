const express = require('express');
const router = express.Router();

const ordemServicoController = require('../controllers/ordem-servico-controller')

router.get('/', ordemServicoController.getOrdemServico);
router.get('/:id_ordem', ordemServicoController.getUmOrdemServico);
router.post('/', ordemServicoController.postOrdemServico);

module.exports = router;