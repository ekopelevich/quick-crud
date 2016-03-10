
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(user){
    user.increments('id');
    user.string('first_name');
    user.string('last_name');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
