const express = require('express');
const router = express.Router();

const ordemServicoController = require('../controllers/ordem-servico-controller')

router.get('/', ordemServicoController.getOrdemServico);
router.get('/:id_ordem', ordemServicoController.getUmOrdemServico);
router.get('/agendados/all', ordemServicoController.getServicos);
router.get('/agendados/finalizados', ordemServicoController.getServicosFinalizados);
router.get('/agendado/:id_conta', ordemServicoController.getClienteAgenda);
router.get('/agendado/finalizados/:id_conta', ordemServicoController.getServicoFinalizado);
router.post('/', ordemServicoController.postOrdemServico);
router.patch('/:id_ordem', ordemServicoController.patchOrdemServico);

module.exports = router;