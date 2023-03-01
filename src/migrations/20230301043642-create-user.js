'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      id_outlet: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        // references: {
        //   model: "outlets", //* --- nama table
        //   key: "id", //* --- id dari outlet
        //   as: "id_outlet",
        // },
      },
      role: {
        type: Sequelize.ENUM,
        allowNull: false,
        values:['admin','kasir','owner']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};