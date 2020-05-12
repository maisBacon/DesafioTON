const logsModel = require('../models/logs');
const logger = require('../util/logger');

class LogsRepository {
  async createLog({
    action,
    error,
    nome,
    idade,
    cargo,
    response,
    id_ton_funcionario,
  }) {
    logger(action, 'write logs on database');
    return await logsModel.create({
      action,
      error,
      nome,
      idade,
      cargo,
      response,
      id_ton_funcionario,
    });
  }
}

module.exports = new LogsRepository();
