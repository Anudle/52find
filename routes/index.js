var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var query = require('../db/query')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '52Finds' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'F2Finds' });
});



router.get('/state/:id', function(req, res, next) {
    knex.from('states').innerJoin('advisors', 'states.id', 'advisors.stateid').where({
        stateid: req.params.id
    })

    .then(function(data) {
        res.render('state', {
            data: data[0]
        });
    });
});


router.get('/directs/:id', function(req, res, next) {
  knex.from('states').innerJoin('directs', 'states.id', 'directs.stateid').where({
      stateid: req.params.id
  })

  .then(function(data) {
      res.render('directs', {
          data: data[0]
      });
  });
});

router.get('/advisors/:id', function(req, res, next) {
  knex.from('states').innerJoin('advisors', 'states.id', 'advisors.stateid').where({
      stateid: req.params.id
  })

  .then(function(data) {
      res.render('advisors', {
          data: data[0]
      });
  });
});


module.exports = router;
