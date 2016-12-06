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


router.get('/state/brokerquestion/:id', function(req, res, next) {
    query.getStatesByID(req.params.id)
        .then(function(data) {
            res.render('brokerquestion', {
                data: data[0]
            });
        });
});

router.get('/state/:id', function(req, res, next) {
    query.getStatesByID(req.params.id)
        .then(function(data) {
            res.render('state', {
                data: data[0]
            });
        }).catch(function(err) {
         return next(err);
        })
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
    query.getMiddleAdvisorPortfolio(req.params.id)
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


//Direct Portfolio
router.get('/directportfolio/a/:id', function(req, res, next) {
    query.getAggresiveDirectPortfolio(req.params.id)
        .then(function(data) {
          console.log(data)
            res.render('advisorsresults', {
                data: data[0]
            })
        });
});
router.get('/directportfolio/b/:id', function(req, res, next) {
    query.getMiddleDirectPortfolio(req.params.id)
        .then(function(data) {
          console.log(data)
            res.render('advisorsresults', {

                data: data[0]
            })
        });
});

router.get('/directportfolio/c/:id', function(req, res, next) {
    query.getConservativeDirectPortfolio(req.params.id)
        .then(function(data) {
          console.log(data)
            res.render('advisorsresults', {
                data: data[0]
            })
        }).catch(function(err) {
         return next(err);
        })
});



// Map page
router.get('/map', function(req, res, next) {
    res.render('map', {

    });
});

//results

router.get('/results', function(req, res, next) {
    axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function(data) {
        res.render('results', {
            price: res.json(data.data.query.results.quote.LastTradePriceOnly)
        })

    })

});



router.get('/test', function(req, res, next) {
  axios.get('https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?date.gte=20150101&date.lt=20160101&ticker=MSFT,FB&api_key=3Qz5kKJjKRy8nrNeXVG9').then(function(data){
    console.log(data)
        res.render('results', {
            price: res.json(data)
        })


})
});



module.exports = router;
