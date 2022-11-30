const express = require('express');
const router = express.Router();

const testePecasController = require('../controllers/teste-pecas-controller');

router.get('/', testePecasController.getTestePecas);
router.get('/:id_teste', testePecasController.getUmTestePecas);
router.post('/', testePecasController.postTestePecas);


module.exports = router;