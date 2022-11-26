const express = require('express');
const router = express.Router();

const funcionarioController = require('../controllers/funcionario-controller')

router.get('/', funcionarioController.getFuncionario);
router.get('/:id_funcionario', funcionarioController.getUmaFuncionario);
router.post('/', funcionarioController.postFuncionario);

module.exports = router;