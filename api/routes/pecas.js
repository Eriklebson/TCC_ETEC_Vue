const express = require('express');
const router = express.Router();

const pecasController = require('../controllers/pecas-controller')

router.get('/', pecasController.getPecas);
router.get('/:id_peca', pecasController.getUmPecas);
router.post('/', pecasController.postPecas);

module.exports = router;