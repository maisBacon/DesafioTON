const logsRepository = require('../repository/logsRepository');

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
