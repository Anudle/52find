
exports.up = function(knex, Promise) {
  return knex.schema.createTable('advisors', function(table) {
      table.increments().primary();
      table.integer('stateid');
      table.string('plan_name');
      table.string('state');
      table.string('link');
      table.decimal('A_share_load');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('advisors');
};
