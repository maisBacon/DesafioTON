const logsModel = require('../models/logs');

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
