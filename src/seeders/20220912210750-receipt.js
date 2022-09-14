"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Receipts",
      [
        {
          title: "Burger",
          cost: 12,
          category: "Groceries",
        },
        {
          title: "shoes",
          cost: 70,
          category: "Shopping",
        },
        {
          title: "Sushi",
          cost: 70,
          category: "Groceries",
        },
        {
          title: "Taco",
          cost: 12,
          category: "Groceries",
        },
        {
          title: "Shirt",
          cost: 100,
          category: "Shopping",
        },
        {
          title: "Petrol",
          cost: 45,
          category: "Transport",
        },
        {
          title: "Rail card",
          cost: 70,
          category: "Transport",
        },
        {
          title: "Savings",
          cost: 30,
          category: "Transport",
        },
        {
          title: "Cinema",
          cost: 10,
          category: "Entertainment",
        },
        {
          title: "Rent",
          cost: 200,
          category: "Other",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Receipts", null, {});
  },
};
