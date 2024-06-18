//defino controlador para el manejo de CRUD
const espectadorCtrl = require('./../controllers/espectador.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de espectador
router.post('/', espectadorCtrl.createEspectador);
router.get('/', espectadorCtrl.getEspectadores);
router.get('/:id', espectadorCtrl.getEspectadorById);

router.delete('/:id', espectadorCtrl.deleteEspectador);

//exportamos el modulo de rutas
module.exports = router;