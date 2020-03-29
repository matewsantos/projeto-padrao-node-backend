const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * PARA CONHECIMENTO:
 * SCRIPTS DE CRIAÇÃO:(NÃO É NECESSÁRIO EXECUTAR, JÁ ESTÃO NAS DEPENDENCIAS NO NODE_MODULES)
 * 
 * INICIA UM PROJETO NODE:                                          npm init -y
 * CRIA UM PROJETO PADRÃO:                                          npm install express
 * PARA RESTART AUTOMÁTICO DO SERVIDOR EM TEMPO REAL:               npm install nodemon -D
 * DRIVER PARA CONEXÃO COM BANCO DE DADOS MYSQL:                    npm install mysql
 * 
 */