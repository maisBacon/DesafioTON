const Sequelize = require('sequelize');

class TestFuncionarios extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        cargo: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

module.exports = TestFuncionarios;
