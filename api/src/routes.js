const expres = require('express');
const Orcamentocontrollesr = require('./controllers/OrcamentoControllers')

const routes = expres.Router();

routes.get('/orcamento', Orcamentocontrollesr.orcamentoGetAll);
routes.post('/orcamento', Orcamentocontrollesr.orcamentoPost);
routes.put('/orcamento/:id', Orcamentocontrollesr.orcamentoPut);
routes.delete('/orcamento/:id', Orcamentocontrollesr.orcamentoDelete);


module.exports = routes;