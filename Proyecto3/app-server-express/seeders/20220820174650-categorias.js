'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let categ_names = ["Cafés", "Batidos", "Tostadas"];
    let categ_photos = ["https://pin.it/KLa1Vl3", "https://pin.it/5zjt6Ra", "https://pin.it/6JwSB6y"]
    for (let i=0; i< categ_names.length; i++) {
      await queryInterface.bulkInsert('categorias', [{  
        // categoria_id: i+1,
        categoria_name: categ_names[i],  
        // categoria_descript: "",  
        categoria_min_price: 0.50,
        categoria_max_price: 1.50,
        categoria_src_img: categ_photos[i],
        // categoria_prom_rate: 4.5,
        // categoria_hora_start: "",
        // categoria_hora_end: '',
        categoria_liked: 10+2*i,
      }], {});  
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {}); 
  }
};
