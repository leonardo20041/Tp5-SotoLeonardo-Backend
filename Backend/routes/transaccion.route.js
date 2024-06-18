//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de producto
router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/:email', transaccionCtrl.getTransaccionByEmail);
router.get('/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionesByDivisa);

//exportamos el modulo de rutas
module.exports = router;