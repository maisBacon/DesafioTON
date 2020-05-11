const Sequelize = require('sequelize');

const tonFuncionarios = require('../app/models/tonFuncionarios');
const logs = require('../app/models/logs');
const testFuncionarios = require('../app/models/testFuncionarios');
const databaseConfig = require('../config/database');

const models = [tonFuncionarios, logs, testFuncionarios];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}
module.exports = new Database();
