'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [{  
      // cliente_id: 1,
      cliente_fname: "Kevin",  
      cliente_lname: "Chevez",  
      cliente_address: "17 y Portete",
      cliente_rate: 5,
      cliente_ncomment: 10,
      cliente_nliked: 18,
    }], {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});  
  }
};
