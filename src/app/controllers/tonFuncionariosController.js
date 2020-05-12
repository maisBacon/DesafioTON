const yup = require('yup');
const tonFuncionariosService = require('../service/tonFuncionariosService');
const logsService = require('../service/logsService');
const customError = require('../../config/customErros');
const constants = require('../util/constants');
const logger = require('../util/logger');

class TonFuncionariosController {
  async index(req, res, next) {
    const action = constants.action.index;
    try {
      logger(action, 'call service method');
      const response = await tonFuncionariosService.index();
      if (!response) {
        const error = await customError.throw(
          'Sem funcionarios cadastrados',
          constants.error.notFound,
          action,
        );
        return res.status(404).json(error);
      }
      await logsService.createLog(action, false);
      logger(action, 'get list employee');
      res.status(200).json(response);
      return next();
    } catch (erro) {
      logger(action, 'catch error', erro.message);
      await customError.throw(
        erro.message,
        constants.error.genericError,
        action,
      );
      return next(res.status(500).json(erro.message));
    }
  }

  async store(req, res, next) {
    const action = constants.action.store;
    const schema = yup.object().shape({
      nome: yup.string().required(),
      idade: yup.number().required(),
      cargo: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      const error = await customError.throw(
        'parametros inválidos',
        constants.error.invalidParamns,
        action,
      );
      return res.status(400).json(error);
    }

    const { nome, idade, cargo } = req.body;

    try {
      logger(action, 'call service method');
      const response = await tonFuncionariosService.store(nome, idade, cargo);
      await logsService.createLog(
        action,
        false,
        nome,
        idade,
        cargo,
        JSON.stringify(response),
        response.id,
      );
      logger(action, 'create employee');
      return res.status(201).json({ message: 'funcionário cadastrado' });
    } catch (erro) {
      logger(action, 'catch error', erro.message);
      customError.throw(
        erro.message,
        constants.error.genericError,
        action,
        nome,
        idade,
        cargo,
      );
      return next(res.status(500).json(erro.message));
    }
  }

  async update(req, res, next) {
    const action = constants.action.update;
    const schemaBody = yup.object().shape({
      nome: yup.string(),
      idade: yup.number(),
      cargo: yup.string(),
    });
    const schemaId = yup.object().shape({
      id: yup.number(),
    });

    if (
      !(await schemaBody.isValid(req.body)) ||
      !(await schemaId.isValid(req.params))
    ) {
      const error = await customError.throw(
        'parametros inválidos',
        constants.error.invalidParamns,
        action,
      );
      return res.status(400).json(error);
    }
    const { id } = req.params;
    const { nome, idade, cargo } = req.body;
    try {
      logger(action, 'call service method');
      const response = await tonFuncionariosService.update(
        id,
        nome,
        idade,
        cargo,
      );
      if (!response) {
        const error = await customError.throw(
          'Funcionario não encontrado',
          constants.error.notFound,
          action,
          nome,
          idade,
          cargo,
          id,
        );
        return res.json(error);
      }
      await logsService.createLog(
        action,
        false,
        nome,
        idade,
        cargo,
        JSON.stringify(response),
        id,
      );
      logger(action, 'update data employee');
      return res.status(200).json({ message: 'dados atualizados' });
    } catch (erro) {
      logger(action, 'catch error', erro.message);
      customError.throw(
        erro.message,
        constants.error.genericError,
        action,
        nome,
        idade,
        cargo,
        id,
      );
      return next(res.status(500).json(erro.message));
    }
  }

  async delete(req, res, next) {
    const action = constants.action.delete;
    const schemaId = yup.object().shape({
      id: yup.number(),
    });
    if (!(await schemaId.isValid(req.params))) {
      const error = await customError.throw(
        'parametros inválidos',
        constants.error.invalidParamns,
        action,
      );
      return res.status(400).json(error);
    }
    const { id } = req.params;
    try {
      logger(action, 'call service method');
      const response = await tonFuncionariosService.delete(id);
      if (!response) {
        const error = await customError.throw(
          `O id: ${id} não corresponde a nenhum funcionario`,
          constants.error.notFound,
          action,
          '',
          null,
          '',
          id,
        );
        return res.status(400).json(error);
      }
      await logsService.createLog(
        action,
        false,
        response.nome,
        response.idade,
        response.cargo,
        JSON.stringify(response),
        id,
      );
      logger(action, 'delete employee');
      return res.status(200).json({ message: 'funcionário excluido' });
    } catch (erro) {
      logger(action, 'catch error', erro.message);
      customError.throw(
        erro.message,
        constants.error.genericError,
        action,
        '',
        '',
        '',
        id,
      );
      return next(res.status(500).json(erro.message));
    }
  }
}

module.exports = new TonFuncionariosController();
