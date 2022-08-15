'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 2; i <1005; i++) {  
      await queryInterface.bulkInsert('Clientes', [{  
          cliente_id: i,
          cliente_fname: 'NombreIrreal'+i,  
          cliente_lname: 'ApellidoIrreal'+i,
          cliente_address: (3*i)+'-'+(i),
          cliente_telf: 'TlfFicticio'+i, 
          cliente_ncomment: i,
          cliente_nliked: 2*i,
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});  
  }
};
