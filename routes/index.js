var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/state/:id', function(req, res, next) {
    knex('states').where({
        id: req.params.id
    }).then(function(data) {
        res.render('state', {
            data: data[0]
        });
    });
});


// Map page
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Express' });
});
module.exports = router;
