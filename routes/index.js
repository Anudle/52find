var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var query = require('../db/query')
var axios = require('axios')


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
            console.log(data)
            res.render('advisors', {
                data: data[0]
            });
        });
});


//Advisors Portfolio
router.get('/advisorportfolio/a/:id', function(req, res, next) {
    query.getAggresiveAdvisorPortfolio(req.params.id)
        .then(function(data) {
          console.log(data)
            res.render('advisorsresults', {
                data: data[0]
            })
        });
});
router.get('/advisorportfolio/b/:id', function(req, res, next) {
    query.getMilldeAdvisorPortfolio(req.params.id)
        .then(function(data) {
          console.log(data)
            res.render('advisorsresults', {
                data: data[0]
            })
        });
});

router.get('/advisorportfolio/c/:id', function(req, res, next) {
    query.getConservativeAdvisorPortfolio(req.params.id)
        .then(function(data) {
          console.log(data)
            res.render('advisorsresults', {
                data: data[0]
            })
        });
});


// Map page
router.get('/map', function(req, res, next) {
    res.render('map', {

    });
});

// results
router.get('/results', function(req, res, next) {
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function(data) {
        res.render('results', {
            price: res.json(data.data.query.results.quote.LastTradePriceOnly)
        })


    })

});



module.exports = router;
