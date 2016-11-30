
exports.up = function(knex, Promise) {
  return knex.schema.createTable('directs', function(table) {
      table.increments().primary();
      table.integer('stateid');
      table.string('plan_name');
      table.string('state');
      table.string('link');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('directs');
};
