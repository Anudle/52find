
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

        knex('direct_portfolios').insert({stateid: 8, planid: 8, state: 'Delaware', portfolio_name: 'Fidelity Funds: Conservative Portfolio', plan_name: 'Delaware College Investment Plan', one_year_return: 3.08, three_year_return: 1.91, five_year_return: 1.75}),

        knex('direct_portfolios').insert({stateid: 9, planid: 9, state: 'District of Colombia', portfolio_name: 'DC College Savings 0-5', plan_name: 'District of Columbia: DC 529 College Savings Program', one_year_return: 8.76, three_year_return: 6.69, five_year_return: 12.46}),

        knex('direct_portfolios').insert({stateid: 9, planid: 9, state: 'District of Colombia', portfolio_name: 'DC College Savings 11-13', plan_name: 'District of Columbia: DC 529 College Savings Program', one_year_return: 8.02, three_year_return: 6.12, five_year_return: 5.94}),

        knex('direct_portfolios').insert({stateid: 9, planid: 9, state: 'District of Colombia', portfolio_name: 'DC College Savings 17 and Up', plan_name: ' District of Columbia: DC 529 College Savings Program', one_year_return: 4.68, three_year_return:3.69, five_year_return: 4.34}),

        knex('direct_portfolios').insert({stateid: 10, planid: 10, state: 'Florida', portfolio_name: 'Blended Equity Portfolio', plan_name: 'Florida 529 Savings Plan', one_year_return: 10.16, three_year_return: 7.32, five_year_return: 13.68}),

        knex('direct_portfolios').insert({stateid: 10, planid: 10, state: 'Florida', portfolio_name: 'Balanced Portfolio', plan_name: 'Florida 529 Savings Plan', one_year_return: 8.15, three_year_return:5.69, five_year_return: 8.34}),

        knex('direct_portfolios').insert({stateid: 10, planid: 10, state: 'Florida', portfolio_name: 'Fixed Income Investment Option', plan_name: 'Florida 529 Savings Plan', one_year_return: 5.85, three_year_return: 3.74, five_year_return: 2.89}),

        knex('direct_portfolios').insert({stateid: 11, planid: 11, state: 'Georgia', portfolio_name: '100% Equity Option', plan_name: 'Path2College 529 Plan', one_year_return: 14.75, three_year_return:10.21, five_year_return: 16.10}),

        knex('direct_portfolios').insert({stateid: 11, planid: 11, state: 'Georgia', portfolio_name: ' Balanced Fund Option', plan_name: 'Path2College 529 Plan', one_year_return: 9.34, three_year_return: 5.62, five_year_return: 8.10}),

        knex('direct_portfolios').insert({stateid: 11, planid: 11, state: 'Georgia', portfolio_name: '100% Fixed-Income Option', plan_name: 'Path2College 529 Plan', one_year_return: 5.7, three_year_return: 3.48, five_year_return: 2.98}),

        knex('direct_portfolios').insert({stateid: 12, planid: 12, state: 'Hawaii', portfolio_name: ' 5 or younger', plan_name: "Hawaii's College Savings Program", one_year_return: 10.94, three_year_return: 6.83, five_year_return: 11.17}),

        knex('direct_portfolios').insert({stateid: 12, planid: 12, state: 'Hawaii', portfolio_name: '6 through 10', plan_name: "Hawaii's College Savings Program", one_year_return: 8.9, three_year_return:5.78, five_year_return: 8.22}),

        knex('direct_portfolios').insert({stateid: 12, planid: 12, state: 'Hawaii', portfolio_name: '16 or older', plan_name: "Hawaii's College Savings Program", one_year_return: 3.67, three_year_return: 1.96, five_year_return: 1.32}),

        knex('direct_portfolios').insert({stateid: 13, planid: 13, state: 'Idaho', portfolio_name: 'Growth Portfolio', plan_name: 'Idaho College Savings Program (IDeal)', one_year_return: 10.95, three_year_return:6.17, five_year_return: 10.24}),

        knex('direct_portfolios').insert({stateid: 13, planid: 13, state: 'Idaho', portfolio_name: 'Moderate Growth Portfolio', plan_name: 'Idaho College Savings Program (IDeal)', one_year_return: 9.1, three_year_return: 5.39,  five_year_return: 7.76}),

        knex('direct_portfolios').insert({stateid: 13, planid: 13, state: 'Idaho', portfolio_name: 'Income Portfolio', plan_name: 'Idaho College Savings Program (IDeal)', one_year_return: 3.5, three_year_return:1.96, five_year_return: 1.34}),

        knex('direct_portfolios').insert({stateid: 14, planid: 14, state: 'Illinois', portfolio_name: 'Bright Start Blended Equity Portfolio', plan_name: 'Bright Start College Savings Program', one_year_return: 13.40, three_year_return: 8.59, five_year_return: 14.58}),

        knex('direct_portfolios').insert({stateid: 14, planid: 14, state: 'Illinois', portfolio_name: ' Bright Start Blended Balanced Portfolio', plan_name: 'Bright Start College Savings Program', one_year_return: 8.42, three_year_return: 5.48, five_year_return: 8.22}),

        knex('direct_portfolios').insert({stateid: 14, planid: 14, state: 'Illinois', portfolio_name: 'Bright Start Blended Fixed Income Portfolio', plan_name: 'Bright Start College Savings Program', one_year_return: 2.95, three_year_return: 2.16, five_year_return: 1.75}),

        knex('direct_portfolios').insert({stateid: 15, planid: 15, state: 'Indiana', portfolio_name: 'Age-Based Option: Aggressive Growth Portfolio', plan_name: 'CollegeChoice 529 Direct Savings Plan', one_year_return: 12.15, three_year_return:7.09, five_year_return: 12.12}),

        knex('direct_portfolios').insert({stateid: 15, planid: 15, state: 'Indiana', portfolio_name: 'Age-Based Option: Moderate Growth Portfolio', plan_name: 'CollegeChoice 529 Direct Savings Plan', one_year_return: 10.02, three_year_return:6, five_year_return: 9.13}),

        knex('direct_portfolios').insert({stateid: 15, planid: 15, state: 'Indiana', portfolio_name: 'Age-Based Option: Conservative Income Portfolio', plan_name: 'CollegeChoice 529 Direct Savings Plan', one_year_return: 3.9, three_year_return:2.26, five_year_return: 2.8}),

        knex('direct_portfolios').insert({stateid: 16, planid: 16, state: 'Iowa', portfolio_name: 'Aggressive Growth Portfolio', plan_name: 'College Savings Iowa', one_year_return: 13.03, three_year_return: 7.26, five_year_return: 13.37}),

        knex('direct_portfolios').insert({stateid: 16, planid: 16, state: 'Iowa', portfolio_name: 'Moderate Growth Portfolio', plan_name: 'College Savings Iowa', one_year_return: 10.35, three_year_return:6.25, five_year_return: 9.38}),

        knex('direct_portfolios').insert({stateid: 16, planid: 16, state: 'Iowa', portfolio_name: 'Income Portfolio', plan_name: 'College Savings Iowa', one_year_return: 7.21, three_year_return:4.91, five_year_return: 5.2}),
      ]);
    });
};
