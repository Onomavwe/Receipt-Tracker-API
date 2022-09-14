'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Receipts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.ENUM("Entertainment", "Transport", "Groceries", "Shopping", "Other"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Receipts');
  }
};