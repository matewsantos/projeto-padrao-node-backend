const express = require('express');

const membroController = require('./controllers/membros')
const routes = express.Router();

/**
 * Projeto Padrão usando express e Banco MySQL
 */

/**
 * TIPOS DE REQUISIÇÃO:
 * 
 * GET:     Buscar alguma informação
 * POST:    Criar uma informação
 * PUT:     Alterar um informação
 * DELETE:  Deletar uma informação
 * 
 */

routes.get('/buscar', membroController.buscar);

routes.post('/criar', membroController.criar);

routes.put('/alterar', membroController.alterar);

routes.delete('/deletar/:id', membroController.deletar);

module.exports = routes;