const logsService = require('../app/service/logsService');
const logger = require('../app/util/logger');

class CustomErros {
  async throw(erro, type, action, nome, idade, cargo, id) {
    const error = true;
    const code = type;
    const response = erro;
    const errorResponse = { message: response, code };
    logger(action, 'create logs error', erro);
    await logsService.createLog(
      action,
      error,
      nome,
      idade,
      cargo,
      response,
      id,
    );
    return errorResponse;
  }
}

module.exports = new CustomErros();
