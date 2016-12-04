
exports.up = function(knex, Promise) {
  return knex.schema.createTable('states', function(table) {
      table.increments().primary();
      table.string('name');
      table.string('state_tax_deduction')
      table.string('load')
      table.boolean('hasAdvisors')
      table.boolean('shouldDoDirect')
      table.integer('advisorAlink')
      table.integer('advisorBlink')
      table.integer('advisorClink')
    })
};


exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('states');
};
