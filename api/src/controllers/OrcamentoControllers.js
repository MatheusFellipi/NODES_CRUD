const knex = require('../database');

module.exports = {
  async orcamentoGetAll(req, res) {
    try {
      const results = await knex('orcamento');
      return res.json(results)
    } catch (err) {
      return res.status(400).send({ error: "erro" })
    }
  },

  async orcamentoPost(req, res, next) {
    try {
      const { cliente, vendedor, valor, descricao } = req.body

      await knex('orcamento').insert({
        cliente, vendedor, valor, descricao,
      });

      return res.status(201).send()
    } catch (error) {
      next(error);
    }

  },
  async orcamentoPut(req, res, next) {
    try {
      const { cliente, vendedor, valor, descricao } = req.body;
      const { id } = req.params;

      await knex('orcamento')
        .update({ cliente, vendedor, valor, descricao })
        .where({ id });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async orcamentoDelete(req, res, next) {
    try {
      const { id } = req.params;
      await knex('orcamento')
        .where({ id })
        .del();

      return res.send();

    } catch (error) {
      next(error);
    }
  }

}