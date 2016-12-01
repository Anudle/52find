
exports.up = function(knex, Promise) {
  return knex.schema.createTable('advisor_portfolios', function(table) {
      table.increments().primary();
      table.integer('stateid');
      table.integer('planid')
      table.string('plan_name');
      table.string('state');
      table.string('portfolio_name');
      table.decimal('one_year_return');
      table.decimal('three_year_return');
      table.decimal('five_year_return');
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('advisor_portfolios');
};
