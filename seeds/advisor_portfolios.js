
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('advisor_portfolios').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('advisor_portfolios').insert({stateid: 1, planid: 1, state: 'Alabama', portfolio_name: 'Age-Based Moderate: Ages 0-8', plan_name: 'CollegeCounts 529 Fund Advisor Plan', one_year_return: -6.18, three_year_return:4.16, five_year_return: 4.97, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 1, planid: 1, state: 'Alabama', portfolio_name: 'Age-Based Moderate: Ages 9-12', plan_name: 'CollegeCounts 529 Fund Advisor Plan', one_year_return: -5.02, three_year_return:3.31, five_year_return: 4.21, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 1, planid: 1, state: 'Alabama', portfolio_name: 'Age-Based Moderate: Ages 13-16', plan_name: 'CollegeCounts 529 Fund Advisor Plan', one_year_return: -3.50, three_year_return:2.57, five_year_return: 3.52, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 2, planid: 2, state: 'Alaska', portfolio_name: 'Equity Portfolio', plan_name: 'John Hancock Freedom 529', one_year_return: 7.01, three_year_return: 4.08, five_year_return: 11.44, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 2, planid: 2, state: 'Alaska', portfolio_name: 'Lifestyle Balanced Portfolio', plan_name: 'John Hancock Freedom 529', one_year_return: 3.52, three_year_return:2.58, five_year_return: 7.42, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 2, planid: 2, state: 'Alaska', portfolio_name: 'Fixed Income Portfolio', plan_name: 'John Hancock Freedom 529', one_year_return: 2.79, three_year_return:1.63, five_year_return: 3.17, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 3, planid: 3, state: 'Arizona', portfolio_name: 'InvestEd Growth Portfolio', plan_name: 'Ivy InvestEd 529 Plan', one_year_return: 1.99, three_year_return:3.47, five_year_return: 9.49, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 3, planid: 3, state: 'Arizona', portfolio_name: 'InvestEd Balanced Portfolio', plan_name: 'Ivy InvestEd 529 Plan', one_year_return: 1.33, three_year_return:2.71, five_year_return: 7.46, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 3, planid: 3, state: 'Arizona', portfolio_name: 'InvestEd Conservative Portfolio', plan_name: 'Ivy InvestEd 529 Plan', one_year_return:1.50, three_year_return:1.94, five_year_return: 4.42, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 4, planid: 4, state: 'Arkansas', portfolio_name: 'Moderate Age-Based: Growth Portfolio (0-5)', plan_name: 'iShares Plan', one_year_return: 6.70, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 4, planid: 4, state: 'Arkansas', portfolio_name: 'iShares Moderate Portfolio (ETF)', plan_name: 'iShares 529 Plan', one_year_return: 5.10, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 4, planid: 4, state: 'Arkansas', portfolio_name: 'iShares Conservative Portfolio (ETF)', plan_name: 'iShares 529 Plan', one_year_return: 3.30, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 6, planid: 6, state: 'Colorado', portfolio_name: 'All Equity', plan_name: 'Scholars Choice College Savings Program', one_year_return: 6.36, three_year_return: 5.23, five_year_return: 12.72, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 6, planid: 6, state: 'Colorado', portfolio_name: 'Balanced 50/50', plan_name: 'Scholars Choice College Savings Program', one_year_return: 4.65, three_year_return: 3.99, five_year_return: 8.04, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 6, planid: 6, state: 'Colorado', portfolio_name: 'Fixed Income 80%', plan_name: 'Scholars Choice College Savings Program', one_year_return: .81, three_year_return: 1.81, five_year_return: 3.57, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 7, planid: 5, state: 'Connecticut', portfolio_name: 'CHET Advisor Aggressive Growth Portfolio', plan_name: 'Connecticut Higher Education Trust (CHET)', one_year_return: 4.86, three_year_return:2.98, five_year_return: 6.16, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 7, planid: 5, state: 'Connecticut', portfolio_name: 'CHET Advisor Balanced Portfolio', plan_name: 'Connecticut Higher Education Trust (CHET)', one_year_return: 3.30, three_year_return:1.24, five_year_return: 7.23, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 7, planid: 5, state: 'Connecticut', portfolio_name: 'CHET Advisor Conservative Portfolio', plan_name: 'Connecticut Higher Education Trust (CHET)', one_year_return: 3.31, three_year_return: 1.20, five_year_return: 3.78, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 9, planid: 7, state: 'District of Colombia', portfolio_name: 'DC College Savings 0-5', plan_name: 'DC 529 College Savings Program (Advisor-sold)', one_year_return: 3.60, three_year_return: 4.97, five_year_return: 11.37, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 9, planid: 7, state: 'District of Colombia', portfolio_name: 'DC College Savings 11-13', plan_name: 'DC 529 College Savings Program (Advisor-sold)', one_year_return: 2.88, three_year_return: 4.41, five_year_return: 8.88, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 9, planid: 7, state: 'District of Colombia', portfolio_name: 'DC College Savings 17 and Up', plan_name: 'DC 529 College Savings Program (Advisor-sold)', one_year_return: 1.82, three_year_return: 2.73, five_year_return: 3.76, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 14, planid: 8, state: 'Illinois', portfolio_name: 'Bright Start Equity Portfolio', plan_name: 'Bright Start Advisor', one_year_return: 6.27, three_year_return: 5.08, five_year_return: 11.61, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 14, planid: 8, state: 'Illinois', portfolio_name: 'Bright Start Balanced Portfolio', plan_name: 'Bright Start Advisor', one_year_return: 3.02, three_year_return: 2.85, five_year_return: 6.10, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 14, planid: 8, state: 'Illinois', portfolio_name: 'Bright Start Fixed Income Portfolio', plan_name: 'Bright Start Advisor', one_year_return: -.64, three_year_return: .28, five_year_return: .44, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 15, planid: 9, state: 'Indiana', portfolio_name: '2031 Enrollment Portfolio Class', plan_name: 'CollegeChoice Advisor 529 Savings Plan', one_year_return: -.68, three_year_return:3.14, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 15, planid: 9, state: 'Indiana', portfolio_name: '2025 Enrollment Portfolio', plan_name: 'CollegeChoice Advisor 529 Savings Plan', one_year_return: 5.37, three_year_return:4.61, five_year_return: 10.09, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 15, planid: 9, state: 'Indiana', portfolio_name: '2019 Enrollment Portfolio', plan_name: 'CollegeChoice Advisor 529 Savings Plan', one_year_return: 3.38, three_year_return:3.77, five_year_return: 7.95, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 16, planid: 10, state: 'Iowa', portfolio_name: 'IAdvisor 529 Aggressive', plan_name: 'IAdvisor 529 Plan', one_year_return: 5.44, three_year_return: 4, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 16, planid: 10, state: 'Iowa', portfolio_name: ' IAdvisor 529 Moderate', plan_name: 'IAdvisor 529 Plan', one_year_return: 2.8, three_year_return:2.79, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 16, planid: 10, state: 'Iowa', portfolio_name: 'IAdvisor 529 Conservative', plan_name: 'IAdvisor 529 Plan', one_year_return: .8, three_year_return:1.96, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 17, planid: 11, state: 'Kansas', portfolio_name: '100% Equity Portfolio', plan_name: 'Learning Quest Advisor', one_year_return: 5.30, three_year_return:5.56, five_year_return: 11.89, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 17, planid: 11, state: 'Kansas', portfolio_name: 'Moderate Portfolio', plan_name: 'Learning Quest Advisor', one_year_return: 2.53, three_year_return:3.47, five_year_return: 7.23, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 17, planid: 11, state: 'Kansas', portfolio_name: 'Conservative Portfolio', plan_name: 'Learning Quest Advisor', one_year_return: 2.30, three_year_return:2.92, five_year_return: 6.14, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 20, planid: 12, state: 'Maine', portfolio_name: 'BlackRock 100% Equity Portfolio', plan_name: 'NextGen College Investing Plan', one_year_return: 6.29, three_year_return: 5.37, five_year_return: 12, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 20, planid: 12, state: 'Maine', portfolio_name: 'BlackRock Age-Based 11-13 Years Portfolio', plan_name: 'NextGen College Investing Plan', one_year_return: 5.77, three_year_return: 4.55, five_year_return: 7.23, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 20, planid: 12, state: 'Maine', portfolio_name: 'BlackRock Fixed Income Portfolio', plan_name: 'NextGen College Investing Plan', one_year_return: -.21, three_year_return: 1.54, five_year_return: 3.19, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 23, planid: 13, state: 'Michigan', portfolio_name: 'Age-Based 0-8', plan_name: 'MI 529 Advisor Plan', one_year_return: 1.96, three_year_return:1.02, five_year_return: 6.58, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 23, planid: 13, state: 'Michigan', portfolio_name: 'Age-Based 12-14', plan_name: 'MI 529 Advisor Plan', one_year_return: .56, three_year_return: .91, five_year_return: 4, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 23, planid: 13, state: 'Michigan', portfolio_name: 'Age-Based 15-16', plan_name: 'MI 529 Advisor Plan', one_year_return: .07, three_year_return:.62, five_year_return: 2.68, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 28, planid: 15, state: 'Nebraska', portfolio_name: 'Age-Based Index 0-5', plan_name: "Nebraska Education Savings Trust", one_year_return: 5.08, three_year_return: 4.36, five_year_return: 8.25, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 28, planid: 15, state: 'Nebraska', portfolio_name: 'Age-Based Growth 11-14', plan_name: "Nebraska Education Savings Trust", one_year_return: .89, three_year_return:2, five_year_return: 3.41, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 28, planid: 15, state: 'Nebraska', portfolio_name: 'Age-Based Growth 19+', plan_name: "Nebraska Education Savings Trust", one_year_return: -2.89, three_year_return: -.69, five_year_return: -.40, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 29, planid: 14, state: 'Nevada', portfolio_name: 'Putnam 529 Aggressive Growth', plan_name: 'Putnam 529 for America', one_year_return: 3.42, three_year_return: 5.57, five_year_return: 12.34, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 29, planid: 14, state: 'Nevada', portfolio_name: 'Putnam 529 Balanced', plan_name: 'Putnam 529 for America', one_year_return: 1.04, three_year_return: 4.33,  five_year_return: 8.71, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 29, planid: 14, state: 'Nevada', portfolio_name: 'Putnam 529 Income', plan_name: 'Putnam 529 for America', one_year_return: -1.08, three_year_return:1.39, five_year_return: 2.94, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 30, planid: 17, state: 'New Hampshire', portfolio_name: 'FA 529 Equity Growth Portfolio', plan_name: 'Fidelity Advisor 529 Plan', one_year_return: 4.06, three_year_return: 6.98, five_year_return: 13.94, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 30, planid: 17, state: 'New Hampshire', portfolio_name: 'FA 529 Moderate Growth Portfolio', plan_name: 'Fidelity Advisor 529 Plan', one_year_return: 3.91, three_year_return: 3.45, five_year_return: 8.92, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 30, planid: 17, state: 'New Hampshire', portfolio_name: 'FA 529 High Income Portfolio', plan_name: 'Fidelity Advisor 529 Plan', one_year_return: 4.17, three_year_return: 2.33, five_year_return: 5.73, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 31, planid: 16, state: 'New Jersey', portfolio_name: 'Franklin Moderate Allocation Age Newborn', plan_name: 'Franklin Templeton 529 College Savings Plan', one_year_return: .82, three_year_return:2.44, five_year_return: 7.96, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 31, planid: 16, state: 'New Jersey', portfolio_name: 'Franklin Moderate Allocation Age 9 - 12', plan_name: 'Franklin Templeton 529 College Savings Plan', one_year_return: 3.49, three_year_return:2.53, five_year_return: 5.76, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 31, planid: 16, state: 'New Jersey', portfolio_name: 'Franklin Moderate Allocation Age 13 - 16', plan_name: 'Franklin Templeton 529 College Savings Plan', one_year_return: -2.41, three_year_return: -.03, five_year_return: 2.76, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 32, planid: 18, state: 'New Mexico', portfolio_name: 'Age Based Portfolio 100', plan_name: "Scholar's Edge", one_year_return: 5.22, three_year_return: 4.97, five_year_return: 11.50, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 32, planid: 18, state: 'New Mexico', portfolio_name: 'Age Based Portfolio 60', plan_name: "Scholar's Edge", one_year_return: 3.75, three_year_return:3.68, five_year_return: 8.03, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 32, planid: 18, state: 'New Mexico', portfolio_name: 'Age Based Portfolio 20', plan_name: "Scholar's Edge", one_year_return: .40, three_year_return:1.48, five_year_return: 3.27, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 33, planid: 19, state: 'New York', portfolio_name: 'JPMorgan 529 Aggressive Portfolio', plan_name: "New York's 529 Advisor", one_year_return: 5.25, three_year_return:4.12, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 33, planid: 19, state: 'New York', portfolio_name: 'JPMorgan 529 Moderate Portfolio', plan_name: "New York's 529 Advisor", one_year_return: 4.09, three_year_return:3.54, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 33, planid: 19, state: 'New York', portfolio_name: 'JPMorgan 529 College Portfolio', plan_name: "New York's 529 Advisor", one_year_return: -.53, three_year_return:.69, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 36, planid: 20, state: 'Ohio', portfolio_name: 'BlackRock Aggressive Growth Portfolio Option', plan_name: 'BlackRock CollegeAdvantage Advisor 529', one_year_return: -.26, three_year_return: 4.46, five_year_return: 11.08, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 36, planid: 20, state: 'Ohio', portfolio_name: ' BlackRock Moderate Portfolio Option', plan_name: 'BlackRock CollegeAdvantage Advisor 529', one_year_return: 2.44, three_year_return: 3.39, five_year_return: 7.77, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 36, planid: 20, state: 'Ohio', portfolio_name: 'BlackRock High Yield Bond Option', plan_name: 'BlackRock CollegeAdvantage Advisor 529', one_year_return: 4.37, three_year_return: 2.70, five_year_return: 6.92, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 37, planid: 21, state: 'Oklahoma', portfolio_name: 'Age-Based 0-8', plan_name: 'Oklahoma Dream 529 Plan', one_year_return: 2.34, three_year_return:1.18, five_year_return: 6.85, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 37, planid: 21, state: 'Oklahoma', portfolio_name: 'Age-Based 12-14', plan_name: 'Oklahoma Dream 529 Plan', one_year_return: 1.09, three_year_return: 1.15, five_year_return: 4.32, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 37, planid: 21, state: 'Oklahoma', portfolio_name: 'Age-Based 15-16', plan_name: 'Oklahoma Dream 529 Plan', one_year_return: .52, three_year_return:.75, five_year_return: 3, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 38, planid: 22, state: 'Oregon', portfolio_name: 'MFS Aggressive Growth Allocation Fund', plan_name: 'MFS 529 Savings Plan', one_year_return: 5.92, three_year_return: 4.03, five_year_return: 10.91, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 38, planid: 22, state: 'Oregon', portfolio_name: 'MFS Growth Allocation Fund', plan_name: 'MFS 529 Savings Plan', one_year_return: 5.19, three_year_return:3.55, five_year_return: 9.29, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 38, planid: 22, state: 'Oregon', portfolio_name: 'MFS Lifetime Income Fund', plan_name: 'MFS 529 Savings Plan', one_year_return: .85, three_year_return:1.69, five_year_return: 4.07, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 40, planid: 23, state: 'Road Island', portfolio_name: 'Invesco Growth College Portfolio', plan_name: 'CollegeBound 529 (Advisor-sold)', one_year_return: -2.3, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 40, planid: 23, state: 'Road Island', portfolio_name: 'Invesco Moderate College Portfolio', plan_name: 'CollegeBound 529 (Advisor-sold)', one_year_return: -2.59, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 40, planid: 23, state: 'Road Island', portfolio_name: 'Invesco Conservative College Portfolio', plan_name: 'CollegeBound 529 (Advisor-sold)', one_year_return: -3.07, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 41, planid: 24, state: 'South Carolina', portfolio_name: 'Moderate 0-5 Years (Growth)', plan_name: 'Future Scholar 529 College Savings Plan', one_year_return: 6.86, three_year_return: 5.58, five_year_return: 11.32, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 41, planid: 24, state: 'South Carolina', portfolio_name: 'Moderate 9-11 Years (Moderate)', plan_name: 'Future Scholar 529 College Savings Plan', one_year_return:4.83 , three_year_return: 4.15, five_year_return: 7.62, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 41, planid: 24, state: 'South Carolina', portfolio_name: 'Moderate 16-17 Years (Conservative)', plan_name: 'Future Scholar 529 College Savings Plan', one_year_return: 3.16, three_year_return: 2.17, five_year_return: 2.69, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 42, planid: 25, state: 'South Dakota', portfolio_name: 'Aggressive Growth', plan_name: 'CollegeAccess 529 (Advisor-sold)', one_year_return: 1.86, three_year_return: .89, five_year_return: 7, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 42, planid: 25, state: 'South Dakota', portfolio_name: 'Growth and Income', plan_name: 'CollegeAccess 529 (Advisor-sold)', one_year_return: -.25, three_year_return:.55, five_year_return: 4.54, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 42, planid: 25, state: 'South Dakota', portfolio_name: 'Income', plan_name: 'CollegeAccess 529 (Advisor-sold)', one_year_return: .43, three_year_return: .50, five_year_return: 2.42, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 44, planid: 26, state: 'Texas', portfolio_name: '100% Equity Portfolio', plan_name: "Lonestar 529 Plan", one_year_return: 4.50, three_year_return: 2.49, five_year_return: 9.36, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 44, planid: 26, state: 'Texas', portfolio_name: 'Balanced Portfolio', plan_name: "Lonestar 529 Plan", one_year_return: 2.42, three_year_return:1.56, five_year_return: 5.70, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 44, planid: 26, state: 'Texas', portfolio_name: 'Fixed Income Portfolio', plan_name: "Lonestar 529 Plan", one_year_return: -1.87, three_year_return: .96, five_year_return: .77, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 47, planid: 27, state: 'Virginia', portfolio_name: 'American Funds College 2033 Fund', plan_name: 'CollegeAmerica', one_year_return: 6.71, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 47, planid: 27, state: 'Virginia', portfolio_name: 'American Funds College 2024 Fund', plan_name: 'CollegeAmerica', one_year_return: 3.54, three_year_return: 3.96, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 47, planid: 27, state: 'Virginia', portfolio_name: 'American Funds College 2018 Fund', plan_name: 'CollegeAmerica', one_year_return: -1.28, three_year_return:2.67, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 49, planid: 28, state: 'West Virginia', portfolio_name: 'SMART529 Aggressive Growth Portfolio', plan_name: 'The Hartford SMART529', one_year_return: 4.27, three_year_return: 2.74, five_year_return:10.90, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 49, planid: 28, state: 'West Virginia', portfolio_name: 'SMART529 Balanced Portfolio', plan_name: 'The Hartford SMART529', one_year_return: 1.97, three_year_return:.74, five_year_return: 6.51, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 49, planid: 28, state: 'West Virginia', portfolio_name: 'SMART529 Conservative Balanced Portfolio', plan_name: 'The Hartford SMART529', one_year_return: -.28, three_year_return:.12, five_year_return: 2.84, age: 'c'}),


        knex('advisor_portfolios').insert({stateid: 50, planid: 29, state: 'Wisconsion', portfolio_name: 'Voya 529 Aggressive Growth Option', plan_name: "Tomorrow's Scholar 529 Plan", one_year_return: 5.80, three_year_return:4.09, age: 'a'}),

        knex('advisor_portfolios').insert({stateid: 50, planid: 29, state: 'Wisconsion', portfolio_name: 'Voya 529 Moderate Option', plan_name: "Tomorrow's Scholar 529 Plan", one_year_return: -5.48, three_year_return:4.00, age: 'b'}),

        knex('advisor_portfolios').insert({stateid: 50, planid: 29, state: 'Wisconsion', portfolio_name: 'Voya 529 Conservative Option', plan_name: "Tomorrow's Scholar 529 Plan", one_year_return: -4.86, three_year_return:1.76, age: 'c'}),
      ]);
    });
};
