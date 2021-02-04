
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('orcamento').del()
    .then(function () {
      // Inserts seed entries
      return knex('orcamento').insert([
        {
          cliente: "nome1",
          vendedor: 'vendedor01',
          descricao: "text",
          valor: 20.80,
        },
        {
          cliente: "nome2",
          vendedor: 'vendedor02',
          descricao: "text",
          valor: 30.70,
        },
        {
          cliente: "nome3",
          vendedor: 'vendedor03',
          descricao: "text",
          valor: 40.40,
        },
        {
          cliente: "nome4",
          vendedor: 'vendedor04',
          descricao: "text",
          valor: 50.20,
        },
        {
          cliente: "nome5",
          vendedor: 'vendedor05',
          descricao: "text",
          valor: 60.30,
        },
        {
          cliente: "nome6",
          vendedor: 'vendedor05',
          descricao: "text",
          valor: 70.50,
        }
      ]);
    });
};
