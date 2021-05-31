const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/criar', UserController.store);
routes.get('/buscar', UserController.index);
routes.put('/atualizar/:user_id', UserController.update);
routes.delete('/apagar/:user_id', UserController.delete);
routes.delete('/apagartudo', UserController.deleteAll);

module.exports = routes;