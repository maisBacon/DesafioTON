module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      action: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      error: {
        type: Sequelize.BOOLEAN,
      },
      nome: {
        type: Sequelize.STRING,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
      cargo: {
        type: Sequelize.STRING,
      },
      response: {
        type: Sequelize.STRING,
      },
      id_ton_funcionario: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('logs');
  },
};
