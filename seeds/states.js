
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('states').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('states').insert({name: 'Alabama', state_tax_deduction: '$10,000', load:'3.5', hasAdvisors:true, advisorAlink:1, advisorBlink: 1, advisorClink: 1, directAlink:1, directBlink: 1, directClink:1, if_deduction: true, final_tax_amount: '$50,000', flag:'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'}),

        knex('states').insert({name: 'Alaska', state_tax_deduction: 'No state tax', load:'5', hasAdvisors:true,  advisorAlink:2, advisorBlink: 2, advisorClink:2, directAlink:11, directBlink: 33, directClink:2, no_state_tax:true }),

        knex('states').insert({name: 'Arizona', state_tax_deduction: '$4,000', load:'5.75',hasAdvisors:true, advisorAlink:3, advisorBlink: 3, advisorClink: 3, directAlink:11, directBlink: 33, directClink:2, if_deduction: true,final_tax_amount: '$56,000'}),

        knex('states' ).insert({name: 'Arkansas', state_tax_deduction: '$10,000', load: 'none', hasAdvisors: false, shouldDoDirect: true, directAlink:4, directBlink: 4, directClink:4, if_deduction: true,  final_tax_amount: '$50,000'}),

        knex('states').insert({name: 'California', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2 }),

        knex('states').insert({name: 'Colorado', state_tax_deduction: 'Full state tax', load: '3.5',hasAdvisors:true, advisorAlink:6, advisorBlink: 6, advisorClink: 6, directAlink:6, directBlink: 6, directClink:6, if_deduction: true, final_tax_amount: '$0'}),

        knex('states').insert({name: 'Connecticut', state_tax_deduction: '$10,000', load:'5.5',hasAdvisors:true, advisorAlink:5, advisorBlink: 5, advisorClink: 5, directAlink:7, directBlink: 7, directClink:7, if_deduction: true , final_tax_amount: '$50,000'}),

        knex('states').insert({name: 'Delaware', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2 , if_deduction: true}),

        knex('states').insert({name: 'District of Colombia', state_tax_deduction: '$8,000', load: '3.75',hasAdvisors:true, advisorAlink:7, advisorBlink: 7, advisorClink: 7, directAlink:9, directBlink: 9, directClink:9, if_deduction: true,final_tax_amount: '$52,000'}),

        knex('states').insert({name: 'Florida', state_tax_deduction: 'No state tax', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2 , no_state_tax:true }),

        knex('states').insert({name: 'Georgia', state_tax_deduction: '$4,000', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:11, directBlink: 11, directClink:11 , if_deduction: true,final_tax_amount: '$54,000'}),

        knex('states').insert({name: 'Hawaii', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2}),

        knex('states').insert({name: 'Idaho', state_tax_deduction: '$8,000', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:13, directBlink: 13, directClink:13 , if_deduction: true, final_tax_amount: '$52,000'}),

        knex('states').insert({name: 'Illinois', state_tax_deduction: '$20,000', load: '3.5',hasAdvisors:true, advisorAlink:8, advisorBlink: 8, advisorClink: 8, directAlink:14, directBlink: 14, directClink:14 , if_deduction: true, final_tax_amount: '$40,000'}),

        knex('states').insert({name: 'Indiana', state_tax_deduction: '$1,000 (tax credit)', load:'5.25',hasAdvisors:true, advisorAlink:9, advisorBlink: 9, advisorClink: 9, directAlink:15, directBlink: 15, directClink:15, if_deduction: true}),

        knex('states').insert({name: 'Iowa', state_tax_deduction: '$6,376', load: '4.75',hasAdvisors:true, advisorAlink:10, advisorBlink: 10, advisorClink: 10, directAlink:16, directBlink: 16, directClink:16, if_deduction: true, final_tax_amount: '$53,624'}),

        knex('states').insert({name: 'Kansas', state_tax_deduction: '$6,000', load:'5.75',hasAdvisors:true, advisorAlink:11, advisorBlink: 11, advisorClink: 11, directAlink:11, directBlink: 33, directClink:2, if_deduction: true,final_tax_amount: '$54,000'}),

        knex('states').insert({name: 'Kentucky', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2, directAlink:18, directBlink: 18, directClink:18 }),

        knex('states').insert({name: 'Louisiana', state_tax_deduction: '$4,800', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:19, directBlink: 19, directClink:19, if_deduction: true,final_tax_amount: '$55,200'}),

        knex('states').insert({name: 'Maine', state_tax_deduction: '$250', load:'5.25',hasAdvisors:true, directAlink:11, directBlink: 33, directClink:2, if_deduction: true, final_tax_amount: '$59,750' }),

        knex('states').insert({name: 'Maryland', state_tax_deduction: '$5,000', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:21, directBlink: 21, directClink:21 , if_deduction: true,final_tax_amount: '$55,000'}),

        knex('states').insert({name: 'Massachusetts', state_tax_deduction: '$2,000',load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:22, directBlink: 22, directClink:22, if_deduction: true, final_tax_amount: '$58,000'}),

        knex('states').insert({name: 'Michigan', state_tax_deduction: '$10,000', load: '4.5',hasAdvisors:true, advisorAlink:13, advisorBlink: 13, advisorClink: 13, directAlink:23, directBlink: 23, directClink:23, if_deduction: true , final_tax_amount: '$50,000'}),

        knex('states').insert({name: 'Minnesota', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2}),

        knex('states').insert({name: 'Mississippi', state_tax_deduction: '$20,000', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:21, directBlink: 21, directClink:21, if_deduction: true, final_tax_amount: '$40,000'}),

        knex('states').insert({name: 'Missouri', state_tax_deduction: '$16,000', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2, if_deduction: true, final_tax_amount: '$44,000'}),

        knex('states').insert({name: 'Montana', state_tax_deduction: '$6,000', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2, if_deduction: true,final_tax_amount: '$54,000'}),

        knex('states').insert({name: 'Nebraska', state_tax_deduction: '$10,000', load: '4.75',hasAdvisors:true,  advisorAlink:15, advisorBlink: 15, advisorClink: 15, directAlink:28, directBlink: 28, directClink:28, if_deduction: true, final_tax_amount: '$50,000'}),

        knex('states').insert({name: 'Nevada', state_tax_deduction: 'No state tax', load:'5.75',hasAdvisors:true, advisorAlink:14, advisorBlink: 14, advisorClink: 14, directAlink:11, directBlink: 33, directClink:2, no_state_tax:true }),

        knex('states').insert({name: 'New Hampshire', state_tax_deduction: 'No deductions', load: '3.75',hasAdvisors:true, advisorAlink:17, advisorBlink: 17, advisorClink: 17, directAlink:11, directBlink: 33, directClink:2 }),

        knex('states').insert({name: 'New Jersey', state_tax_deduction: 'No deductions', load:'5.75',hasAdvisors:true, advisorAlink:16, advisorBlink: 16, advisorClink: 16, directAlink:11, directBlink: 33, directClink:2 }),

        knex('states').insert({name: 'New Mexico', state_tax_deduction: 'Full state tax', load: '4.75',hasAdvisors:true, advisorAlink:18, advisorBlink: 18, advisorClink: 18, directAlink:32, directBlink: 32, directClink:32, if_deduction: true,if_deduction: true, final_tax_amount: '$0'}),

        knex('states').insert({name: 'New York', state_tax_deduction: '$10,000' , load:'5.25',hasAdvisors:true, advisorAlink:19, advisorBlink: 19, advisorClink: 19 , directAlink:33, directBlink: 33, directClink:33, if_deduction: true, final_tax_amount: '$50,000'}),

        knex('states').insert({name: 'North Carolina', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2 }),

        knex('states').insert({name: 'North Dakota', state_tax_deduction: '$10,000', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:35, directBlink: 35, directClink:35, if_deduction: true, final_tax_amount: '$50,000'}),

        knex('states').insert({name: 'Ohio', state_tax_deduction: '$2,000', load:'5.25',hasAdvisors:true, advisorAlink:20, advisorBlink: 20, advisorClink: 20 , directAlink:36, directBlink: 36, directClink:36, if_deduction: true, final_tax_amount: '$58,000'}),

        knex('states').insert({name: 'Oklahoma', state_tax_deduction: '$20,000', load: '4.25',hasAdvisors:true, advisorAlink:21, advisorBlink: 21, advisorClink: 21, directAlink:37, directBlink: 37, directClink:37, if_deduction: true, final_tax_amount: '$40,000'}),

        knex('states').insert({name: 'Oregon', state_tax_deduction: '$4,620', load:'5.75',hasAdvisors:true, advisorAlink:22, advisorBlink: 22, advisorClink: 22 , directAlink:38, directBlink: 38, directClink:38, if_deduction: true, final_tax_amount: '$54,000'}),

        knex('states').insert({name: 'Pennsylvania', state_tax_deduction: '$28,000', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2, if_deduction: true, final_tax_amount: '$32,000'}),

        knex('states').insert({name: 'Road Island', state_tax_deduction: '$1,000', load: '4',hasAdvisors:true, advisorAlink:23, advisorBlink: 23, advisorClink: 23 , directAlink:40, directBlink: 40, directClink:40, if_deduction: true, final_tax_amount: '$59,000'}),

        knex('states').insert({name: 'South Carolina', state_tax_deduction: 'Full state tax', load: '3.75',hasAdvisors:true, advisorAlink:25, advisorBlink: 25, advisorClink: 25, directAlink:41, directBlink: 41, directClink:41, if_deduction: true,final_tax_amount: '$0'}),

        knex('states').insert({name: 'South Dakota', state_tax_deduction: 'No state taxes',load:'5.5',hasAdvisors:true, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2, no_state_tax:true }),

        knex('states').insert({name: 'Tennessee', state_tax_deduction: 'No deductions', load: 'none',hasAdvisors:false, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2}),

        knex('states').insert({name: 'Texas', state_tax_deduction: 'No state taxes', load:'5',hasAdvisors:true, advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2, no_state_tax:true }),

        knex('states').insert({name: 'Utah', state_tax_deduction: '$95 (tax credit)', load: 'none',hasAdvisors:false, shouldDoDirect:true, directAlink:45, directBlink: 45, directClink:45}),

        knex('states').insert({name: 'Vermont', state_tax_deduction: '$5,000', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:46, directBlink: 46, directClink:46, if_deduction: true,final_tax_amount: '$55,000'}),

        knex('states').insert({name: 'Virgina', state_tax_deduction: 'Full state tax', load: 'none',hasAdvisors:false, shouldDoDirect: true, directAlink:47, directBlink: 47, directClink:47, if_deduction: true,final_tax_amount: '$0'}),

        knex('states').insert({name: 'West Virgina', state_tax_deduction: 'Full state tax', load: '5.5',hasAdvisors:true , advisorAlink:28, advisorBlink: 28, advisorClink: 28, directAlink:49, directBlink: 49, directClink:49, if_deduction: true, final_tax_amount: '$0'}),

        knex('states').insert({name: 'Wisconsion', state_tax_deduction: '$3,100', load: '4.75',hasAdvisors:true , advisorAlink:29, advisorBlink: 29, advisorClink: 29, directAlink:48, directBlink: 48, directClink:48, if_deduction: true,final_tax_amount: '$56,900'}),

        knex('states').insert({name: 'Washington', state_tax_deduction: 'none',hasAdvisors: false , advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2 }),

        knex('states').insert({name: 'Wyoming', state_tax_deduction: 'none', hasAdvisors: false , advisorAlink:17, advisorBlink: 22, advisorClink: 20, directAlink:11, directBlink: 33, directClink:2 }),


      ]);
    });
};
