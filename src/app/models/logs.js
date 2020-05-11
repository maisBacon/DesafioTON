const Sequelize = require('sequelize');

class Logs extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        action: Sequelize.STRING,
        nome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        cargo: Sequelize.STRING,
        response: Sequelize.STRING,
        error: Sequelize.BOOLEAN,
        id_ton_funcionario: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Logs;
