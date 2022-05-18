const db = require('../models');;
const { Router } = require('express'); // obtiene solo el metodo router que es para hacer el enrutamiento
const router = Router();

router.get('/', (req, res) => { // req->request->peticion || res->response->respuesta
    res.send({ message: 'Hello ADSI 2231424' });
});

module.exports = router; // se exporta el modulo para usarlo