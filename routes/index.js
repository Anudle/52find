var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var query = require('../db/query')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '52Finds'
    });
});


router.get('/state/:id', function(req, res, next) {
    query.getStatesByID(req.params.id)
        .then(function(data) {
            res.render('state', {
                data: data[0]
            });
        });
});

router.get('/directs/:id', function(req, res, next) {
    query.getDirectByStateId(req.params.id)
        .then(function(data) {
          console.log(data)

            res.render('directs', {
                data: data[0]
            });
        });
});

router.get('/advisors/:id', function(req, res, next) {
    query.getAdvisorsByStateId(req.params.id)
        .then(function(data) {
            res.render('advisors', {
                data: data[0]
            });
        });
});



// Map page
router.get('/map', function(req, res, next) {
    res.render('map', {
        title: 'Express'
    });
});

module.exports = router;
