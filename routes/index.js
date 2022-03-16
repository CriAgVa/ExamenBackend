var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenido' });
});

//pagina de crecion de cliente
router.get('/nuevo_cliente', function(req, res, next) {
  res.render('crear_cliente', { title: 'Creacion de Clientes' });
});

//pagina de listado, actualizacion y eliminacion de clientes
router.get('/ver_clientes', function(req, res, next) {
  res.render('listar_clientes', { title: 'Lista de Clientes' });
});

module.exports = router;
