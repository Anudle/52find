
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('advisors').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('advisors').insert({stateid: 1, plan_name: 'CollegeCounts 529 Fund Advisor Plan', state: 'Alabama', link:'https://www.collegecounts529advisor.com/', A_share_load: 3.5 }),
        knex('advisors').insert({stateid: 2, plan_name: 'John Hancock Freedom 529', state: 'Alaska', link:'http://www.jhinvestments.com/College/Overview.aspx', A_share_load: 5 }),
        knex('advisors').insert({stateid: 3, plan_name: 'Ivy InvestEd 529 Plan', state: 'Arizona', link:'https://www.ivyinvestments.com/products/ivy-invested-529-plan', A_share_load: 5.75 }),
        knex('advisors').insert({stateid: 4, plan_name: 'iShares 529 Plan', state: 'Arkansas', link:'https://www.ishares529.com/', A_share_load: 5 }),
        knex('advisors').insert({stateid: 6, plan_name: 'Scholars Choice College Savings Program', state: 'Colorado', link:'https://www.leggmason.com/en-us/investing/college-savings/529-audience-filter.html', A_share_load: 3.5 }),
        knex('advisors').insert({stateid: 7, plan_name: 'Connecticut Higher Education Trust (CHET)', state: 'Connecticut', link:'https://www.hartfordfunds.com/home.html', A_share_load: 5.5 }),
        knex('advisors').insert({stateid: 9, plan_name: 'DC 529 College Savings Program (Advisor-sold)', state: 'Distric of Colombia', link:'http://www.dccollegesavings.com/', A_share_load: 3.75 }),
        knex('advisors').insert({stateid: 14, plan_name: 'Bright Start College Savings Program', state: 'Illinois', link:'http://www.brightstartadvisor.com', A_share_load: 3.5 }),
        knex('advisors').insert({stateid: 15, plan_name: 'CollegeChoice Advisor 529 Savings Plan', state: 'Indiana', link:'https://www.collegechoicedirect.com/', A_share_load: 5.25 }),
        knex('advisors').insert({stateid: 16, plan_name: 'IAdvisor 529 Plan', state: 'Iowa', link:'https://529plans.investments.voya.com/Iowa/index.htm', A_share_load: 4.75 }),
        knex('advisors').insert({stateid: 17, plan_name: 'Learning Quest Advisor', state: 'Kansas', link:'https://www.learningquest.com/', A_share_load: 5.75 }),
        knex('advisors').insert({stateid: 20, plan_name: 'NextGen College Investing Plan', state: 'Maine', link:'http://www.nextgenforme.com/', A_share_load: 5.25 }),
        knex('advisors').insert({stateid: 23, plan_name: 'MI 529 Advisor Plan', state: 'Michigan', link:'http://www.mi529advisor.com/MI529Advisor/Pages/Home.aspx', A_share_load: 4.5 }),
        knex('advisors').insert({stateid: 28, plan_name: 'Nebraska Education Savings Trust', state: 'Nebraska', link:'https://www.nest529advisor.com/', A_share_load: 4.75 }),
        knex('advisors').insert({stateid: 29, plan_name: 'Putnam 529 for America', state: 'Nevada', link:'https://www.putnam.com/individual/college-savings/', A_share_load: 5.75 }),
        knex('advisors').insert({stateid: 30, plan_name: 'Fidelity Advisor 529 Plan', state: 'New Hampshire', link:'https://institutional.fidelity.com/app/home', A_share_load: 3.75 }),
        knex('advisors').insert({stateid: 31, plan_name: 'Franklin Templeton 529 College Savings Plan', state: 'New Jersey', link:'https://www.franklintempleton.com/investor/products/investment-goals/education-savings/', A_share_load: 5.75 }),
        knex('advisors').insert({stateid: 32, plan_name: "Scholar's Edge", state: 'New Mexcio', link:'https://www.scholarsedge529.com/OFI529/', A_share_load: 4.75 }),
        knex('advisors').insert({stateid: 33, plan_name: "New York's 529 Advisor", state: 'New York', link:'https://www.ny529advisor.com/', A_share_load: 5.25 }),
        knex('advisors').insert({stateid: 36, plan_name: "BlackRock CollegeAdvantage Advisor 529", state: 'Ohio', link:'https://www.blackrock.com/investing/products/529-college-savings-plans/collegeadvantage-529-plan?cid=vanity:products:529:college_advantage', A_share_load: 5.25 }),
        knex('advisors').insert({stateid: 37, plan_name: 'Oklahoma Dream 529 Plan', state: 'Oklahoma', link:'https://www.okdream529.com/', A_share_load: 4.25 }),
        knex('advisors').insert({stateid: 38, plan_name: 'MFS 529 Savings Plan', state: 'Oregon', link:'https://www.mfs.com', A_share_load: 5.75 }),
        knex('advisors').insert({stateid: 40, plan_name: 'CollegeBound 529 (Advisor-sold)', state: 'Rhode Island', link:'https://www.invesco.com/portal/site/us/investors/college-bound-529/?ivz_campaign=collegebound-529&ivz_source=vanityurl&ivz_content=collegebound-529-com', A_share_load: 4 }),
        knex('advisors').insert({stateid: 41, plan_name: 'Future Scholar 529 College Savings Plan', state: 'South Carolina', link:'https://www.futurescholar.com/', A_share_load: 3.75 }),
        knex('advisors').insert({stateid: 42, plan_name: 'CollegeAccess 529 (Advisor-sold)', state: 'South Dakota', link:'https://www.collegeaccess529.com/', A_share_load: 5.5 }),
        knex('advisors').insert({stateid: 44, plan_name: 'Lonestar 529 Plan', state: 'Texas', link:'https://www.lonestar529.com/', A_share_load: 5 }),
        knex('advisors').insert({stateid: 47, plan_name: 'CollegeAmerica', state: 'Virginia', link:'https://www.americanfunds.com/individual/products/college-america-529.html', A_share_load: 3 }),
        knex('advisors').insert({stateid: 49, plan_name: 'The Hartford SMART529', state: 'West Virginia', link:'https://www.hartfordfunds.com/products/college-savings/smart529.html', A_share_load: 5.5 }),
        knex('advisors').insert({stateid: 50, plan_name: "Tomorrow's Scholar 529 Plan", state: 'Wisconsin', link:'https://529plans.investments.voya.com/Wisconsin/index.htm#.WD0PTqIrJ7o', A_share_load: 4.75 }),
      ]);
    });
};
