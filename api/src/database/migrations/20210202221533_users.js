
exports.up = (knex) => knex.schema.createTable('orcamento', (table) => {
  table.increments('id');
  table.text('cliente').notNullable();
  table.text('vendedor').notNullable();
  table.text('descricao').notNullable();
  table.float('valor').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('update').defaultTo(knex.fn.now());
})

exports.down = async knex => knex.schema.dropTable('orcamento')

