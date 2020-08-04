import express from 'express';

const app = express();

app.use(express.json());

/**Métodos
 * GET: Buscar ou listar informação
 * POST: Criar nova informação
 * PUT: Atualizar informação existente
 * DELETE: Deletar informação existente
*/

// Corpo (Request body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// http://localhost:3333/users
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});


app.listen(3333); //localhost:3333
