var knex = require('./knex');

function States() {
    return knex('states');
}

function AdvisorsPort() {
    return knex('advisor_portfolios')
}

function DirectPort() {
    return knex('direct_portfolios')
}

module.exports = {
    getStatesByID: function(id) {
        return States().where('id', id)
    },
    getDirectByStateId: function(id) {
        return States().innerJoin('directs', 'states.id', 'directs.stateid').where('stateid', id)
    },
    getAdvisorsByStateId: function(id) {
        return States().leftOuterJoin('advisors', 'states.name', 'advisors.state').where('states.id', id)
    },
    getAggresiveAdvisorPortfolio: function(id) {
        return AdvisorsPort().where('planid', id).where('age', 'a')
    },
    getMiddleAdvisorPortfolio: function(id) {
        return AdvisorsPort().where('planid', id).where('age', 'b')
    },
    getConservativeAdvisorPortfolio: function(id) {
        return AdvisorsPort().where('planid', id).where('age', 'c')
    },
    getAggresiveDirectPortfolio: function(id) {
        return DirectPort().where('planid', id).where('age', 'a')
    },
    getMiddleDirectPortfolio: function(id) {
        return DirectPort().where('planid', id).where('age', 'b')
    },
    getConservativeDirectPortfolio: function(id) {
        return DirectPort().where('planid', id).where('age', 'c')
    }
}
