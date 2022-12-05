const express = require('express');
const router = express.Router();

const enderecoController = require('../controllers/endereco-controller')

router.get('/', enderecoController.getEndereco);
router.get('/:id_endereco', enderecoController.getUmEndereco);
router.get('/cliente/:id_conta', enderecoController.getClienteEndereco);
router.post('/', enderecoController.postEndereco);

module.exports = router;