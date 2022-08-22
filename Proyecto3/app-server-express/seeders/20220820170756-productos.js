'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let prods_names =
    [
      //cafes
      [
        "Café expreso", 
        "Café con Leche"
      ],
      //batidos
      [
      "Batido de Mora",
      "Batido de Frutilla",
      "Batido de Oreo",
      "Batido de Banano",
      "Batido de Papaya",
      ],
      //tostadas
      [
        "Tostada de Queso",
        "Tostada de Jamón",
        "Tostada de Mortadela",
        "Tostada de Mixta",
      ]
    ];
    let id_prods = 1;
    for (let i=0; i< prods_names.length; i++) {
      for (let j = 0; j < prods_names[i].length; j++) {
        const element = prods_names[i];
        await queryInterface.bulkInsert('productos', [{  
          // producto_id: id_prods++,
          categoria_id: i+1,
          producto_name: prods_names[i][j],
          producto_descript: "Producto nuevo en nuestra tienda",
          producto_price: 0.50*(i+1),
          // producto_src_img: "/src/assets/images/img_not_available.png",
          // producto_rate: 5.0,
          // producto_hora_start: '07:00',
          // producto_hora_end: '17:00',
        }], {});   
      }
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {}); 
  }
};
