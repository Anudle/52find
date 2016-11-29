
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table) {
      table.increments().primary();
      table.string('title');
      table.string('author');
    })
};


exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('book');
};
