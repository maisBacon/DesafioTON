const logsRepository = require('../repository/logsRepository');
const logger = require('../util/logger');

class LogsService {
  async createLog(
    action,
    error,
    nome,
    idade,
    cargo,
    response,
    id_ton_funcionario,
  ) {
    logger(action, 'calling logs repository');
    await logsRepository.createLog({
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

module.exports = new LogsService();
