
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function (t) {
    t.increments();
    t.string('author');
    t.string('title');
    t.string('director');
    t.integer('rating');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
