const express = require('express');
const router = express.Router();
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'img/usuario/')
    },
    filename: function(req, file, cb){
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
})

const upload = multer({storage: storage});

const ContaController = require('../controllers/conta-controller')

router.get('/', ContaController.getConta);
router.get('/:id_conta', ContaController.getUmaConta);
router.post('/', ContaController.postConta);
router.post('/autenticacao', ContaController.postAutenticacao);
router.patch('/editPermision/:id_conta', ContaController.patchEditPermision);
router.patch('/editContaDetalhes/:id_conta', upload.single('imagem'), ContaController.patchContaDetalhes);
router.patch('/alterarSenha/:id_conta', ContaController.patchAlteracaoDeSenha);


module.exports = router;