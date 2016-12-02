
exports.up = function(knex, Promise) {
  return knex.schema.createTable('states', function(table) {
      table.increments().primary();
      table.string('name');
      table.string('state_tax_deduction')
      table.string('load')
      table.boolean('hasAdvisors')
    })
};


exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('states');
};
