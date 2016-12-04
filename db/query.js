var knex = require('./knex');

function States() {
    return knex('states');
}
function AdvisorsPort(){
  return knex('advisor_portfolios')
}

module.exports = {
  getStatesByID: function(id){
    return States().where('id', id)
  },
  getDirectByStateId: function(id){
    return States().innerJoin('directs', 'states.id', 'directs.stateid').where('stateid', id)
  },
  getAdvisorsByStateId: function(id){
    return States().leftOuterJoin('advisors', 'states.name', 'advisors.state').where('states.id', id)
  },
  getAggresiveAdvisorPortfolio: function(id){
    return AdvisorsPort().where('planid', id).where('age', 'a')
  },
  getMilldeAdvisorPortfolio: function(id){
    return AdvisorsPort().where('planid', id).where('age', 'b')
},
getConservativeAdvisorPortfolio: function(id){
  return AdvisorsPort().where('planid', id).where('age', 'c')
}
}
