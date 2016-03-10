exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').del(),
    knex('users').insert({id: 1, first_name: 'Joe', last_name: 'Jones'}),
    knex('users').insert({id: 2, first_name: 'Jon', last_name: 'Smith'})
  ]);
};
