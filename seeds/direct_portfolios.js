
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

        knex('direct_portfolios').insert({stateid: 17, planid: 17, state: 'Kansas', portfolio_name: '100% Equity Portfolio', plan_name: 'Learning Quest 529 Education Savings Program', one_year_return: 12.93, three_year_return:7.53, five_year_return: 13.31}),

        knex('direct_portfolios').insert({stateid: 17, planid: 17, state: 'Kansas', portfolio_name: 'Balanced Index Portfolio', plan_name: 'Learning Quest 529 Education Savings Program', one_year_return: 10.94, three_year_return:7.76, five_year_return: 10.78}),

        knex('direct_portfolios').insert({stateid: 17, planid: 17, state: 'Kansas', portfolio_name: 'Conservative Portfolio', plan_name: 'Learning Quest 529 Education Savings Program', one_year_return: 9.12, three_year_return:5.12, five_year_return: 7.58}),

        knex('direct_portfolios').insert({stateid: 18, planid: 18, state: 'Kentucky', portfolio_name: 'Active Equity', plan_name: 'Kentucky Education Savings Plan Trust', one_year_return: 11.49, three_year_return: 5.84, five_year_return: 13.12}),

        knex('direct_portfolios').insert({stateid: 18, planid: 18, state: 'Kentucky', portfolio_name: 'Balanced', plan_name: 'Kentucky Education Savings Plan Trust', one_year_return: 9.57, three_year_return:5.59, five_year_return: 8.76}),

        knex('direct_portfolios').insert({stateid: 18, planid: 18, state: 'Kentucky', portfolio_name: 'Fixed Income Portfolio', plan_name: 'Kentucky Education Savings Plan Trust', one_year_return: 4.49, three_year_return: 2.93, five_year_return: 2.09}),

        knex('direct_portfolios').insert({stateid: 19, planid: 19, state: 'Louisiana', portfolio_name: 'Moderate: Ages 0 through 5', plan_name: 'START Saving Program', one_year_return: 10.26, three_year_return:6.24, five_year_return: 9.30}),

        knex('direct_portfolios').insert({stateid: 19, planid: 19, state: 'Louisiana', portfolio_name: 'Moderate: Ages 6 through 10', plan_name: 'START Saving Program', one_year_return: 8.84, three_year_return: 5.67, five_year_return: 7.35}),

        knex('direct_portfolios').insert({stateid: 19, planid: 19, state: 'Louisiana', portfolio_name: 'Moderate: Ages 11 through 15', plan_name: 'START Saving Program', one_year_return: 7.33, three_year_return: 5.02, five_year_return: 5.28}),

        knex('direct_portfolios').insert({stateid: 20, planid: 20, state: 'Maine', portfolio_name: 'BlackRock Equity Index Portfolio', plan_name: 'NextGen College Investing Plan', one_year_return: 15.18, three_year_return: 10.94, five_year_return: 16.08}),

        knex('direct_portfolios').insert({stateid: 20, planid: 20, state: 'Maine', portfolio_name: 'BlackRock Balanced Portfolio', plan_name: 'NextGen College Investing Plan', one_year_return: 8.4}),

        knex('direct_portfolios').insert({stateid: 20, planid: 20, state: 'Maine', portfolio_name: 'BlackRock Fixed Income Portfolio', plan_name: 'NextGen College Investing Plan', one_year_return: 4.36}),

        knex('direct_portfolios').insert({stateid: 21, planid: 21, state: 'Maryland', portfolio_name: 'Equity Portfolio', plan_name: 'College Savings Plans of Maryland', one_year_return: 13.21, three_year_return:7.41, five_year_return: 13.73}),

        knex('direct_portfolios').insert({stateid: 21, planid: 21, state: 'Maryland', portfolio_name: 'Balanced Portfolio', plan_name: 'College Savings Plans of Maryland', one_year_return: 11.30, three_year_return:6.22, five_year_return: 10.53}),

        knex('direct_portfolios').insert({stateid: 21, planid: 21, state: 'Maryland', portfolio_name: 'Bond & Income Portfolio', plan_name: 'College Savings Plans of Maryland', one_year_return: 9.86, three_year_return:4.16, five_year_return: 5.49}),

        knex('direct_portfolios').insert({stateid: 22, planid: 22, state: 'Massachusetts', portfolio_name: 'Fidelity Funds: Aggressive Growth', plan_name: 'U.Fund College Investing Plan', one_year_return: 12.20, three_year_return: 7.19, five_year_return: 13.37}),

        knex('direct_portfolios').insert({stateid: 22, planid: 22, state: 'Massachusetts', portfolio_name: 'Fidelity Funds: Moderate Growth', plan_name: 'U.Fund College Investing Plan', one_year_return: 10.76, three_year_return:6.35, five_year_return: 10.78}),

        knex('direct_portfolios').insert({stateid: 22, planid: 22, state: 'Massachusetts', portfolio_name: 'Fidelity Index Fund: Conservative', plan_name: 'U.Fund College Investing Plan', one_year_return: 2.31, three_year_return:1.71, five_year_return: 1.22}),

        knex('direct_portfolios').insert({stateid: 23, planid: 23, state: 'Michigan', portfolio_name: 'Moderate Age-Based: Age Band 0-4', plan_name: 'Michigan Education Savings Program', one_year_return: 11.63, three_year_return:7.09}),

        knex('direct_portfolios').insert({stateid: 23, planid: 23, state: 'Michigan', portfolio_name: 'Moderate Age-Based: Age Band 9-10', plan_name: 'Michigan Education Savings Program', one_year_return: 9.99, three_year_return: 6.15}),

        knex('direct_portfolios').insert({stateid: 23, planid: 23, state: 'Michigan', portfolio_name: 'Moderate Age-Based: Age Band 16', plan_name: 'Michigan Education Savings Program', one_year_return: 5.61, three_year_return:6.59, five_year_return: 4.20}),

        knex('direct_portfolios').insert({stateid: 24, planid: 24, state: 'Minnesota', portfolio_name: 'Aggressive Allocation Option', plan_name: 'Minnesota College Savings Plan', one_year_return: 11.41}),

        knex('direct_portfolios').insert({stateid: 24, planid: 24, state: 'Minnesota', portfolio_name: 'Moderate Allocation Option', plan_name: 'Minnesota College Savings Plan', one_year_return: 9.93, three_year_return: 5.89, five_year_return: 8.94}),

        knex('direct_portfolios').insert({stateid: 24, planid: 24, state: 'Minnesota', portfolio_name: 'Conservative Allocation Option', plan_name: 'Minnesota College Savings Plan', one_year_return: 6.55}),

        knex('direct_portfolios').insert({stateid: 25, planid: 25, state: 'Mississippi', portfolio_name: 'Fidelity Funds: Aggressive Growth Portfolio', plan_name: 'Mississippi Affordable College Savings', one_year_return: 12.16, three_year_return: 7.18, five_year_return: 13.37}),

        knex('direct_portfolios').insert({stateid: 25, planid: 25, state: 'Mississippi', portfolio_name: 'Moderate Allocation Option', plan_name: 'Mississippi Affordable College Savings', one_year_return: 9.64}),

        knex('direct_portfolios').insert({stateid: 25, planid: 25, state: 'Mississippi', portfolio_name: 'Fixed Income', plan_name: 'Mississippi Affordable College Savings', one_year_return: 5.31, three_year_return: 3.1}),

        knex('direct_portfolios').insert({stateid: 26, planid: 26, state: 'Missouri', portfolio_name: 'Moderate Age-Based (0-5)', plan_name: "MOST Missouri's 529 College Savings Plan", one_year_return: 11.52, three_year_return:6.7, five_year_return: 11.19}),

        knex('direct_portfolios').insert({stateid: 26, planid: 26, state: 'Missouri', portfolio_name: 'Moderate Age-Based (6-10)', plan_name: "MOST Missouri's 529 College Savings Plan", one_year_return: 10.26, three_year_return: 6.19, five_year_return: 9.24}),

        knex('direct_portfolios').insert({stateid: 26, planid: 26, state: 'Missouri', portfolio_name: 'Moderate Age-Based (16-18)', plan_name: "MOST Missouri's 529 College Savings Plan", one_year_return: 7.17, three_year_return: 4.83, five_year_return: 5.08}),

        knex('direct_portfolios').insert({stateid: 27, planid: 27, state: 'Montana', portfolio_name: 'Growth Portfolio', plan_name: 'Achieve Montana', one_year_return: 9.57}),

        knex('direct_portfolios').insert({stateid: 27, planid: 27, state: 'Montana', portfolio_name: 'Moderate Portfolio', plan_name: 'Achieve Montana', one_year_return: 7.21}),

        knex('direct_portfolios').insert({stateid: 27, planid: 27, state: 'Montana', portfolio_name: 'Conservative Portfolio', plan_name: 'Achieve Montana', one_year_return: 4.24}),

        knex('direct_portfolios').insert({stateid: 28, planid: 28, state: 'Nebraska', portfolio_name: 'Age-Based Index 0-5', plan_name: "Nebraska Education Savings Trust", one_year_return: 10.74, three_year_return: 6.42, five_year_return: 9.66}),

        knex('direct_portfolios').insert({stateid: 28, planid: 28, state: 'Nebraska', portfolio_name: 'Age-Based Growth 11-14', plan_name: "Nebraska Education Savings Trust", one_year_return: 8.54, three_year_return:4.94, five_year_return: 7.11}),

        knex('direct_portfolios').insert({stateid: 28, planid: 28, state: 'Nebraska', portfolio_name: 'Age-Based Growth 19+', plan_name: "Nebraska Education Savings Trust", one_year_return: 4.75, three_year_return: 2.13, five_year_return: 1.78}),

        knex('direct_portfolios').insert({stateid: 29, planid: 29, state: 'Nevada', portfolio_name: 'Moderate: Vanguard Growth Portfolio', plan_name: 'The Vanguard 529 Savings Plan', one_year_return: 10.97, three_year_return:6.55, five_year_return: 10.73}),

        knex('direct_portfolios').insert({stateid: 29, planid: 29, state: 'Nevada', portfolio_name: 'Moderate: Vanguard Moderate Growth Portfolio', plan_name: 'The Vanguard 529 Savings Plan', one_year_return: 9.11, three_year_return: 5.78,  five_year_return: 8.21}),

        knex('direct_portfolios').insert({stateid: 29, planid: 29, state: 'Nevada', portfolio_name: 'Moderate: Vanguard Income Portfolio', plan_name: 'The Vanguard 529 Savings Plan', one_year_return: 3.41, three_year_return:2.26, five_year_return: 1.74}),

        knex('direct_portfolios').insert({stateid: 30, planid: 30, state: 'New Hampshire', portfolio_name: 'Fidelity Funds: Aggressive Growth', plan_name: 'UNIQUE College Investing Plan', one_year_return: 12.22, three_year_return: 7.17, five_year_return: 13.36}),

        knex('direct_portfolios').insert({stateid: 30, planid: 30, state: 'New Hampshire', portfolio_name: 'Fidelity Funds: Moderate Growth', plan_name: 'UNIQUE College Investing Plan', one_year_return: 10.78, three_year_return: 6.36, five_year_return: 10.78}),

        knex('direct_portfolios').insert({stateid: 30, planid: 30, state: 'New Hampshire', portfolio_name: 'Fidelity Funds: Conservative', plan_name: 'UNIQUE College Investing Plan', one_year_return: 3.14, three_year_return: 1.93, five_year_return: 1.75}),

        knex('direct_portfolios').insert({stateid: 31, planid: 31, state: 'New Jersey', portfolio_name: 'Franklin Moderate Allocation Age Newborn', plan_name: 'NJBEST 529 College Savings Plan', one_year_return: 7.35, three_year_return:4.89, five_year_return: 9.7}),

        knex('direct_portfolios').insert({stateid: 31, planid: 31, state: 'New Jersey', portfolio_name: 'Franklin Moderate Allocation Age 9 - 12', plan_name: 'NJBEST 529 College Savings Plan', one_year_return: 5.66, three_year_return:3.72, five_year_return: 7.01}),

        knex('direct_portfolios').insert({stateid: 31, planid: 31, state: 'New Jersey', portfolio_name: 'Franklin Moderate Allocation Age 13 - 16', plan_name: 'NJBEST 529 College Savings Plan', one_year_return: 3.98, three_year_return:2.38, five_year_return: 4.43}),

        knex('direct_portfolios').insert({stateid: 32, planid: 32, state: 'New Mexico', portfolio_name: 'Age Based Portfolio 100', plan_name: "The Education Plan's College Savings Program", one_year_return: 11.21, three_year_return: 7.22, five_year_return: 13.39}),

        knex('direct_portfolios').insert({stateid: 32, planid: 32, state: 'New Mexico', portfolio_name: 'Age Based Portfolio 60', plan_name: "The Education Plan's College Savings Program", one_year_return: 8.72, three_year_return:5.68, five_year_return: 9.16}),

        knex('direct_portfolios').insert({stateid: 32, planid: 32, state: 'New Mexico', portfolio_name: 'Age Based Portfolio 20', plan_name: "The Education Plan's College Savings Program", one_year_return: 4.71, three_year_return:3.19, five_year_return: 4.02}),

        knex('direct_portfolios').insert({stateid: 33, planid: 33, state: 'New York', portfolio_name: 'Aggressive Growth Portfolio', plan_name: "New York's 529 College Savings Program", one_year_return: 13.31, three_year_return:9.57, five_year_return: 15.75}),

        knex('direct_portfolios').insert({stateid: 33, planid: 33, state: 'New York', portfolio_name: 'Growth Portfolio', plan_name: "New York's 529 College Savings Program", one_year_return: 11.57, three_year_return:8.36, five_year_return: 12.63}),

        knex('direct_portfolios').insert({stateid: 33, planid: 33, state: 'New York', portfolio_name: 'Income Portfolio', plan_name: "New York's 529 College Savings Program", one_year_return: 3.88, three_year_return:2.53, five_year_return: 1.92}),

        knex('direct_portfolios').insert({stateid: 34, planid: 34, state: 'North Carolina', portfolio_name: 'Vanguard Aggressive Growth Portfolio', plan_name: 'National College Savings Program', one_year_return: 13.21, three_year_return: 7.25}),

        knex('direct_portfolios').insert({stateid: 34, planid: 34, state: 'North Carolina', portfolio_name: 'Vanguard Growth Portfolio', plan_name: 'National College Savings Program', one_year_return: 11.39, three_year_return:6.64}),

        knex('direct_portfolios').insert({stateid: 34, planid: 34, state: 'North Carolina', portfolio_name: 'Vanguard Income Portfolio', plan_name: 'National College Savings Program', one_year_return: 3.6, three_year_return: 2.47}),

        knex('direct_portfolios').insert({stateid: 35, planid: 35, state: 'North Dakota', portfolio_name: 'Aggressive Growth Portfolio', plan_name: 'College SAVE', one_year_return: 12.62, three_year_return:6.72, five_year_return: 12.61}),

        knex('direct_portfolios').insert({stateid: 35, planid: 35, state: 'North Dakota', portfolio_name: 'Growth Portfolio', plan_name: 'College SAVE', one_year_return: 10.78, three_year_return:6.10, five_year_return: 10.21}),

        knex('direct_portfolios').insert({stateid: 35, planid: 35, state: 'North Dakota', portfolio_name: 'Income Portfolio', plan_name: 'College SAVE', one_year_return: 3.6, three_year_return:2.11, five_year_return: 1.38}),

        knex('direct_portfolios').insert({stateid: 36, planid: 36, state: 'Ohio', portfolio_name: 'Advantage Newborn through age 5', plan_name: 'Ohio CollegeAdvantage Direct 529 Savings Plan', one_year_return: 10.416, three_year_return: 6.9, five_year_return: 12.67}),

        knex('direct_portfolios').insert({stateid: 36, planid: 36, state: 'Ohio', portfolio_name: 'Advantage Ages 10 to 12', plan_name: 'Ohio CollegeAdvantage Direct 529 Savings Plan', one_year_return: 8.75, three_year_return:6.79, five_year_return: 11.54}),

        knex('direct_portfolios').insert({stateid: 36, planid: 36, state: 'Ohio', portfolio_name: 'Advantage Ages 17 and older', plan_name: 'Ohio CollegeAdvantage Direct 529 Savings Plan', one_year_return: 3.62, three_year_return: 2.23, five_year_return: 3.15}),

        knex('direct_portfolios').insert({stateid: 37, planid: 37, state: 'Oklahoma', portfolio_name: 'Diversified Equity', plan_name: 'Oklahoma College Savings Plan', one_year_return: 11.65, three_year_return:6.96, five_year_return: 13.61}),

        knex('direct_portfolios').insert({stateid: 37, planid: 37, state: 'Oklahoma', portfolio_name: 'Balanced', plan_name: 'Oklahoma College Savings Plan', one_year_return: 9.05, three_year_return: 5.62, five_year_return: 9.18}),

        knex('direct_portfolios').insert({stateid: 37, planid: 37, state: 'Oklahoma', portfolio_name: 'Fixed Income', plan_name: 'Oklahoma College Savings Plan', one_year_return: 5.33, three_year_return:3.29, five_year_return: 2.75}),

        knex('direct_portfolios').insert({stateid: 38, planid: 38, state: 'Oregon', portfolio_name: 'Aggressive Portfolio', plan_name: 'Oregon College Savings Plan', one_year_return: 10.34, three_year_return: 4.47, five_year_return: 8.48}),

        knex('direct_portfolios').insert({stateid: 38, planid: 38, state: 'Oregon', portfolio_name: 'Balanced Index Portfolio', plan_name: 'Oregon College Savings Plan', one_year_return: 10.61, three_year_return:7.72, five_year_return: 10.74}),

        knex('direct_portfolios').insert({stateid: 38, planid: 38, state: 'Oregon', portfolio_name: 'Conservative Portfolio', plan_name: 'Oregon College Savings Plan', one_year_return: 5, three_year_return:2.97, five_year_return: 3.34}),

        knex('direct_portfolios').insert({stateid: 39, planid: 39, state: 'Pennsylvania', portfolio_name: 'Aggressive Growth Portfolio', plan_name: 'Pennsylvania 529 Investment Plan', one_year_return: 13.12, three_year_return:7.21, five_year_return: 13.29}),

        knex('direct_portfolios').insert({stateid: 39, planid: 39, state: 'Pennsylvania', portfolio_name: 'Growth Portfolio', plan_name: 'Pennsylvania 529 Investment Plan', one_year_return: 11.53, three_year_return: 6.57, five_year_return: 11.19}),

        knex('direct_portfolios').insert({stateid: 39, planid: 39, state: 'Pennsylvania', portfolio_name: 'Income Portfolio', plan_name: 'Pennsylvania 529 Investment Plan', one_year_return: 6.96, three_year_return: 5.06, five_year_return: 5.30}),

        knex('direct_portfolios').insert({stateid: 40, planid: 40, state: 'Road Island', portfolio_name: 'Growth Portfolio', plan_name: 'CollegeBound Saver (Direct-sold)', one_year_return: 3.5}),

        knex('direct_portfolios').insert({stateid: 40, planid: 40, state: 'Road Island', portfolio_name: 'Moderate Growth Portfolio', plan_name: 'CollegeBound Saver (Direct-sold)', one_year_return: 2.5}),

        knex('direct_portfolios').insert({stateid: 40, planid: 40, state: 'Road Island', portfolio_name: 'Bond Portfolio', plan_name: 'CollegeBound Saver (Direct-sold)', one_year_return: -.5}),

        knex('direct_portfolios').insert({stateid: 41, planid: 41, state: 'South Carolina', portfolio_name: 'Future Scholar Aggressive Growth Portfolio', plan_name: 'Future Scholar 529 College Savings Plan', one_year_return: 3.52, three_year_return: 5.76, five_year_return: 10.74}),

        knex('direct_portfolios').insert({stateid: 41, planid: 41, state: 'South Carolina', portfolio_name: 'Future Scholar Growth Portfolio', plan_name: 'Future Scholar 529 College Savings Plan', one_year_return: 3.71, three_year_return: 5.69, five_year_return: 9.94}),

        knex('direct_portfolios').insert({stateid: 41, planid: 41, state: 'South Carolina', portfolio_name: 'Future Scholar Conservative Portfolio', plan_name: 'Future Scholar 529 College Savings Plan', one_year_return: 2.69, three_year_return: 2.61, five_year_return: 3.09}),

        knex('direct_portfolios').insert({stateid: 42, planid: 42, state: 'South Dakota', portfolio_name: 'Aggressive Growth', plan_name: 'CollegeAccess 529 (Direct-sold)', one_year_return: 8.59, three_year_return: 3.55, five_year_return: 8.98}),

        knex('direct_portfolios').insert({stateid: 42, planid: 42, state: 'South Dakota', portfolio_name: 'Growth and Income', plan_name: 'CollegeAccess 529 (Direct-sold)', one_year_return: 6.34, three_year_return:3.18, five_year_return: 6.49}),

        knex('direct_portfolios').insert({stateid: 42, planid: 42, state: 'South Dakota', portfolio_name: 'Income', plan_name: 'CollegeAccess 529 (Direct-sold)', one_year_return: 5.12, three_year_return: 2.51, five_year_return: 3.92}),

        knex('direct_portfolios').insert({stateid: 43, planid: 43, state: 'Tennessee', portfolio_name: 'Age-Based 0-4', plan_name: 'TNStars College Savings 529 Program', one_year_return: 14.91}),

        knex('direct_portfolios').insert({stateid: 43, planid: 43, state: 'Tennessee', portfolio_name: 'Age-Based 5-10', plan_name: 'TNStars College Savings 529 Program', one_year_return: 11.74, three_year_return: 7.34}),

        knex('direct_portfolios').insert({stateid: 43, planid: 43, state: 'Tennessee', portfolio_name: 'Age-Based 15-17', plan_name: 'TNStars College Savings 529 Program', one_year_return: 7.08, three_year_return: 4.95}),

        knex('direct_portfolios').insert({stateid: 44, planid: 44, state: 'Texas', portfolio_name: 'Blended 100% Equity Portfolio', plan_name: "Texas College Savings Plan", one_year_return: 12.83, three_year_return: 5.59, five_year_return: 11.76}),

        knex('direct_portfolios').insert({stateid: 44, planid: 44, state: 'Texas', portfolio_name: 'Blended Balanced Portfolio', plan_name: "Texas College Savings Plan", one_year_return: 9.89, three_year_return:4.68, five_year_return: 7.99}),

        knex('direct_portfolios').insert({stateid: 44, planid: 44, state: 'Texas', portfolio_name: 'Fixed Income Portfolio', plan_name: "Texas College Savings Plan", one_year_return: 4.66, three_year_return: 3.47, five_year_return: 2.54}),

        knex('direct_portfolios').insert({stateid: 45, planid: 45, state: 'Utah', portfolio_name: 'Age-Based Moderate: 0-3', plan_name: 'Utah Educational Savings Plan (UESP)', one_year_return: 11.50, three_year_return:6.63, five_year_return: 11.24}),

        knex('direct_portfolios').insert({stateid: 45, planid: 45, state: 'Utah', portfolio_name: 'Age-Based Moderate: 7-9', plan_name: 'Utah Educational Savings Plan (UESP)', one_year_return: 9.50, three_year_return: 5.70,  five_year_return: 9.07}),

        knex('direct_portfolios').insert({stateid: 45, planid: 45, state: 'Utah', portfolio_name: ' Age-Based Moderate: 16-18', plan_name: 'Utah Educational Savings Plan (UESP)', one_year_return: 2.97, three_year_return: 2.00, five_year_return: 3.94}),

        knex('direct_portfolios').insert({stateid: 46, planid: 46, state: 'Vermont', portfolio_name: 'Diversified Equity Portfolio', plan_name: 'Vermont Higher Education Investment Plan', one_year_return: 12.14}),

        knex('direct_portfolios').insert({stateid: 46, planid: 46, state: 'Vermont', portfolio_name: 'Balanced Portfolio', plan_name: 'Vermont Higher Education Investment Plan', one_year_return: 9.82}),

        knex('direct_portfolios').insert({stateid: 46, planid: 46, state: 'Vermont', portfolio_name: 'Fixed-Income Portfolio', plan_name: 'Vermont Higher Education Investment Plan', one_year_return: 5.61}),

        knex('direct_portfolios').insert({stateid: 47, planid: 47, state: 'Virginia', portfolio_name: 'Aggressive Growth', plan_name: 'Virginia529 inVEST', one_year_return: 11.4, three_year_return:6.54, five_year_return: 11.05}),

        knex('direct_portfolios').insert({stateid: 47, planid: 47, state: 'Virginia', portfolio_name: 'Moderate Growth', plan_name: 'Virginia529 inVEST', one_year_return: 10.11, three_year_return:6.08, five_year_return: 9.13}),

        knex('direct_portfolios').insert({stateid: 47, planid: 47, state: 'Virginia', portfolio_name: 'Conservative Income', plan_name: 'Virginia529 inVEST', one_year_return: 7.18, three_year_return:4.86, five_year_return: 5.10}),

        knex('direct_portfolios').insert({stateid: 49, planid: 49, state: 'West Virginia', portfolio_name: 'SMART529 WV Direct Aggressive Growth Portfolio', plan_name: 'SMART529 WV Direct College Savings Plan', one_year_return: 13.15, three_year_return: 7.27, five_year_return: 13.37}),

        knex('direct_portfolios').insert({stateid: 49, planid: 49, state: 'West Virginia', portfolio_name: 'SMART529 WV Direct Balanced Portfolio', plan_name: 'SMART529 WV Direct College Savings Plan', one_year_return: 10.44, three_year_return:5.9, five_year_return: 9.74}),

        knex('direct_portfolios').insert({stateid: 49, planid: 49, state: 'West Virginia', portfolio_name: 'SMART529 WV Direct Conservative Bond Portfolio', plan_name: 'SMART529 WV Direct College Savings Plan', one_year_return: 2.80, three_year_return:2.08, five_year_return: 2.27}),

        knex('direct_portfolios').insert({stateid: 50, planid: 48, state: 'Wisconsion', portfolio_name: 'Active-Based Aggressive Portfolio', plan_name: 'Learning Quest 529 Education Savings Program', one_year_return: 12.07, three_year_return:6.72}),

        knex('direct_portfolios').insert({stateid: 50, planid: 48, state: 'Wisconsion', portfolio_name: 'Active-Based Moderate Portfolio', plan_name: 'Learning Quest 529 Education Savings Program', one_year_return: 9.10, three_year_return:5.17}),

        knex('direct_portfolios').insert({stateid: 50, planid: 48, state: 'Wisconsion', portfolio_name: 'Active-Based Conservative Portfolio', plan_name: 'Learning Quest 529 Education Savings Program', one_year_return: 6.38, three_year_return:3.76}),
      ]);
    });
};
