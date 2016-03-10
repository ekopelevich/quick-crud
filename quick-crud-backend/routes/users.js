var express = require('express');
var router = express.Router();
var knexfile = require('../knexfile');
var knex = require('knex')(knexfile.development);
// var cors = require('cors');

// router.use('cors');

/* GET users listing. */

var nextId = 3;

// users = [{
//   id: 1,
//   first_name: "Elana",
//   last_name: "Kopelevich",
// },{
//   id: 2,
//   first_name: "Shad",
//   last_name: "Self",
// },{
//   id: 3,
//   first_name: "Bob",
//   last_name: "Smith",
// }];

router.get('/:user_id', function(req, res, next) {
  knex('users').select().where('id', req.params.user_id)
  .then(function(id){
    res.status(200).send(users[id]);
  })
});

router.get('/', function(req, res, next) {
  knex('users').select().then(function(users){
    res.status(200).send(users);
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
  };

  knex('users').returning('id').insert(user).then(function(ids) {
    user.id = ids[0];
    res.status(201).send(user);
  });
});

router.put('/:user_id', function(req, res, next) {
  var user = {
    id: req.params.user_id,
    first_name: req.body.firstName,
    last_name: req.body.lastName
  };

  knex('users').update(user)
  .where('id', req.params.user_id)
  .then(function(){
    res.status(202).send(user);
  })
});

router.delete('/', function(req, res, next) {
  knex('users').delete()
  .where('id', req.parama.user_id).then(function(){
    res.sendStatus(204);
  })
});

module.exports = router;
