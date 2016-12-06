
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
      table.integer('directAlink')
      table.integer('directBlink')
      table.integer('directClink')
      table.boolean('if_deduction')
      table.string('final_tax_amount')
      table.boolean('no_state_tax')
    })
};


exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('states');
};
