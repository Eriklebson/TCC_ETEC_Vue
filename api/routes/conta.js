const express = require('express');
const router = express.Router();
const multer = require ('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'img/')
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


module.exports = router;