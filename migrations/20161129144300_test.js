
exports.up = function(knex, Promise) {
  return knex.schema.createTable('states', function(table) {
      table.increments().primary();
      table.string('name');
      table.string('state_tax_deduction')
    })
};


exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('states');
};
