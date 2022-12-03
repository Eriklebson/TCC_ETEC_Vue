const express = require('express');
const router = express.Router();
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'img/servicos/')
    },
    filename: function(req, file, cb){
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
})

const upload = multer({storage: storage});

const servicosController = require('../controllers/servicos-controller')

router.get('/', servicosController.getServicos);
router.get('/:id_servico', servicosController.getUmServicos);
router.post('/', upload.single('imagem'), servicosController.postServicos);
router.delete('/:id_servico' , servicosController.deleteServico);

module.exports = router;