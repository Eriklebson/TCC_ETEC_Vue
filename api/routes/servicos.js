const express = require('express');
const router = express.Router();

const servicosController = require('../controllers/servicos-controller')

router.get('/', servicosController.getServicos);
router.get('/:id_servico', servicosController.getUmServicos);
router.post('/', servicosController.postServicos);

module.exports = router;