
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('direct_portfolios').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('direct_portfolios').insert({stateid: 1, planid: 1, state: 'Alabama', portfolio_name: 'Age-Based Moderate: Ages 0-8', plan_name: 'College Counts 529', one_year_return: .37, three_year_return:6.92, five_year_return: 7.01}),
        knex('direct_portfolios').insert({stateid: 1, planid: 1, state: 'Alabama', portfolio_name: 'Age-Based Moderate: Ages 8-12', plan_name: 'College Counts 529', one_year_return: 1.4, three_year_return:5.97, five_year_return: 6.12}),
        knex('direct_portfolios').insert({stateid: 1, planid: 1, state: 'Alabama', portfolio_name: 'Age-Based Moderate: Ages 13-16', plan_name: 'College Counts 529', one_year_return: 2.74, three_year_return:5.23, five_year_return: 5.35}),
        knex('direct_portfolios').insert({stateid: 2, planid: 2, state: 'Alaska', portfolio_name: 'Equity Portfolio', plan_name: 'T-Row Price College Savings Plan', one_year_return: 13.23, three_year_return: 7.4, five_year_return: 13.47}),
        knex('direct_portfolios').insert({stateid: 2, planid: 2, state: 'Alaska', portfolio_name: 'Balanced Portfolio', plan_name: 'T-Row Price College Savings Plan', one_year_return: 11.98, three_year_return:6.2, five_year_return: 10.44}),
        knex('direct_portfolios').insert({stateid: 2, planid: 2, state: 'Alaska', portfolio_name: 'Fixed Income Portfolio', plan_name: 'T-Row Price College Savings Plan', one_year_return: 9.91, three_year_return:4.18, five_year_return: 5.49}),
        knex('direct_portfolios').insert({stateid: 3, planid: 3, state: 'Arizona', portfolio_name: ' Fidelity Funds: Aggressive Growth', plan_name: 'Fidelity Arizona College Savings Plan', one_year_return: 12.19, three_year_return:6.92, five_year_return: 7.01}),
        knex('direct_portfolios').insert({stateid: 3, planid: 3, state: 'Arizona', portfolio_name: 'Fidelity Funds: Moderate Growth', plan_name: 'Fidelity Arizona College Savings Plan', one_year_return: 10.8, three_year_return:6.35, five_year_return: 10.78}),
        knex('direct_portfolios').insert({stateid: 3, planid: 3, state: 'Arizona', portfolio_name: 'Fidelity Funds: Conservative', plan_name: 'Fidelity Arizona College Savings Plan', one_year_return: 3.2, three_year_return:1.94, five_year_return: 1.77}),
        knex('direct_portfolios').insert({stateid: 4, planid: 4, state: 'Arkansas', portfolio_name: 'Moderate Age-Based: Growth Portfolio (0-5)', plan_name: 'GIFT College Investing Plan', one_year_return: 11.06, three_year_return: 6.17, five_year_return: 10.29}),
        knex('direct_portfolios').insert({stateid: 4, planid: 4, state: 'Arkansas', portfolio_name: 'Moderate Age-Based: Moderate Growth Portfolio (6-10)', plan_name: 'GIFT College Investing Plan', one_year_return: 9.18, three_year_return:5.36, five_year_return: 7.73}),
        knex('direct_portfolios').insert({stateid: 4, planid: 4, state: 'Arkansas', portfolio_name: 'Moderate Age-Based: Income Portfolio (16-18)', plan_name: 'GIFT College Investing Plan', one_year_return: 3.25, three_year_return:1.86, five_year_return: 1.26}),
        knex('direct_portfolios').insert({stateid: 5, planid: 5, state: 'California', portfolio_name: 'Active Growth Investment Portfolio', plan_name: 'The ScholarShare College Savings Plan', one_year_return: 10.72, three_year_return:6.63}),
        knex('direct_portfolios').insert({stateid: 5, planid: 5, state: 'California', portfolio_name: 'Active Moderate Growth Investment Portfolio', plan_name: 'The ScholarShare College Savings Plan', one_year_return: 8.67, three_year_return:5.48}),
        knex('direct_portfolios').insert({stateid: 5, planid: 5, state: 'California', portfolio_name: 'Active Conservative Investment Portfolio', plan_name: 'The ScholarShare College Savings Plan', one_year_return: 3.35, three_year_return:2.39}),
        knex('direct_portfolios').insert({stateid: 6, planid: 6, state: 'Colorado', portfolio_name: 'Moderate: Growth Portfolio', plan_name: 'Direct Portfolio College Savings Plan', one_year_return: 11.34, three_year_return: 6.94, five_year_return: 11.14}),
        knex('direct_portfolios').insert({stateid: 6, planid: 6, state: 'Colorado', portfolio_name: 'Moderate: Moderate Growth Portfolio', plan_name: 'Direct Portfolio College Savings Plan', one_year_return: 9.45, three_year_return:6.05, five_year_return: 8.45}),
        knex('direct_portfolios').insert({stateid: 6, planid: 6, state: 'Colorado', portfolio_name: 'Moderate: Income Portfolio ', plan_name: 'Direct Portfolio College Savings Plan', one_year_return: 3.56, three_year_return:2.38, five_year_return: 1.69}),
        knex('direct_portfolios').insert({stateid: 7, planid: 7, state: 'Connecticut', portfolio_name: ' Moderate Managed Allocation Option: Age Band 0-3', plan_name: 'Connecticut Higher Education Trust (CHET)', one_year_return: 10.72, three_year_return:5.78, five_year_return: 10.31}),
        knex('direct_portfolios').insert({stateid: 7, planid: 7, state: 'Connecticut', portfolio_name: 'Moderate Managed Allocation Option: Age Band 8-11', plan_name: 'Connecticut Higher Education Trust (CHET)', one_year_return: 7.8, three_year_return:4.42, five_year_return: 7.23}),
        knex('direct_portfolios').insert({stateid: 7, planid: 7, state: 'Connecticut', portfolio_name: 'Moderate Managed Allocation Option: Age Band 15-17', plan_name: 'Connecticut Higher Education Trust (CHET)', one_year_return: 5.61, three_year_return:3.41, five_year_return: 5.02}),
        knex('direct_portfolios').insert({stateid: 8, planid: 8, state: 'Delaware', portfolio_name: 'Fidelity Funds: Aggressive Growth Portfolio', plan_name: 'Delaware College Investment Plan', one_year_return: 12.16, three_year_return: 7.18, five_year_return: 13.37}),
        knex('direct_portfolios').insert({stateid: 8, planid: 8, state: 'Delaware', portfolio_name: 'Fidelity Funds: Moderate Growth Portfolio', plan_name: 'Delaware College Investment Plan', one_year_return: 10.78, three_year_return:6.36, five_year_return: 10.77}),
        knex('direct_portfolios').insert({stateid: 8, planid: 8, state: 'Delaware', portfolio_name: 'Fidelity Funds: Conservative Portfolio', plan_name: 'Delaware College Investment Plan', one_year_return: 3.08, three_year_return:1.91, five_year_return: 1.75}),
      ]);
    });
};
