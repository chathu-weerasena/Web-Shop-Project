"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Chathu",
          email: "chwee@gmail.com",
          password: "hfg4@7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karla",
          email: "kazil@gmail.com",
          password: "j3^gd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yara",
          email: "yilee@gmail.com",
          password: "3gd$te",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Katie",
          email: "katpear@gmail.com",
          password: "hg45@",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Randall",
          email: "ranpear@gmail.com",
          password: "hd362#",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
