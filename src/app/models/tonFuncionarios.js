const Sequelize = require('sequelize');

class TonFuncionarios extends Sequelize.Model {
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
  }
}

module.exports = TonFuncionarios;
