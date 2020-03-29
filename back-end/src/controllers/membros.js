const crypto = require('crypto');
const execSQLQuery = require('../connection')

/**
 * TIPOS DE PARAMETROS:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtro, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body:
 * 
 */

module.exports = {

    buscar(request, response) {
        //  Requisição de TESTE: http://localhost:3333/buscar?nome=TESTE
        const params = request.query;
        console.log(params);

        //execSQLQuery(`SELECT * FROM TABLE_EXAMPLE`, response);

        return response.json({
            evento: 'Método para Buscar!'
        })
    },

    criar(request, response) {
        /**  Requisição de TESTE: http://localhost:3333/criar
        *
        *    Body: {  "nome" : "TESTANDO",
        *	          "idade" : 29,
        *          }
        *  Caso queira pegar cada valor do body em uma variável:
        *  EXEMPLO: const {nome, idade, telefone, cidade} = request.body;
        */
        const params = request.body;

        console.log(params);

        return response.json({
            evento: 'Método para Criar!'
        })
    },

    alterar(request, response) {
        //  Requisição de TESTE: http://localhost:3333/alterar

        // Body: {  "nome" : "TESTANDO",
        //          "idade" : 29,
        //       }
        const params = request.body;

        console.log(params);
        return response.json({
            evento: 'Método para Alterar!'
        })
    },

    deletar(request, response) {
        //  Requisição de TESTE: http://localhost:3333/deletar/1
        const params = request.params;

        console.log(params);

        return response.json({
            evento: 'Método para Deletar!'
        })
    }

}