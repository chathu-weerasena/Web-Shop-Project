"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        { title: "Electronics", createdAt: new Date(), updatedAt: new Date() },
        { title: "Jewelery", createdAt: new Date(), updatedAt: new Date() },
        {
          title: "Men's Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Women's Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
