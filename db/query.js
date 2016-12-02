var knex = require('./knex');

function States() {
    return knex('states');
}

module.exports = {
  getStatesByID: function(id){
    return States().where('id', id)
  },
  getDirectByStateId: function(id){
    return States().innerJoin('directs', 'states.id', 'directs.stateid').where('stateid', id)
  },
  getAdvisorsByStateId: function(id){
    return States().innerJoin('advisors', 'states.id', 'advisors.stateid').where('stateid', id)
  }
}
