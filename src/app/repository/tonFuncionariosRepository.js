const tonFuncionariosModel = require('../models/tonFuncionarios');

class TonFuncionariosRepository {
  async index() {
    return await tonFuncionariosModel.findAll();
  }

  async store(nome, idade, cargo) {
    return await tonFuncionariosModel.create({ nome, idade, cargo });
  }

  async update(id, query) {
    const user = await tonFuncionariosModel.findByPk(id);
    if (!user) return undefined;
    return await user.update(query);
  }

  async delete(id) {
    const user = await tonFuncionariosModel.findByPk(id);
    if (!user) return undefined;
    await user.destroy();
    return user;
  }
}

module.exports = new TonFuncionariosRepository();
