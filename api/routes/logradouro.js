const express = require('express');
const router = express.Router();

const logradouroController = require('../controllers/logradouro-controller')

router.get('/', logradouroController.getLogradouro);
router.get('/:cep', logradouroController.getUmLogradouro);

module.exports = router;