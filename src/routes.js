const { Router } = require('express');

const TonFuncionariosController = require('./app/controllers/tonFuncionariosController');

const routes = new Router();

routes.get('/', TonFuncionariosController.index);
routes.post('/', TonFuncionariosController.store);
routes.put('/:id', TonFuncionariosController.update);
routes.delete('/:id', TonFuncionariosController.delete);

module.exports = routes;
