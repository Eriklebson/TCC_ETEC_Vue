const express = require('express');
const router = express.Router();

const oficinaController = require('../controllers/oficina-controller')

router.get('/', oficinaController.getOficina);
router.get('/:id_oficina', oficinaController.getUmaOficina);
router.post('/', oficinaController.postOficina);

module.exports = router;