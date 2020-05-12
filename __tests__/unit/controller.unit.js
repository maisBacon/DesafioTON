const { assert, expect } = require('chai');
const service = require('../../src/app/service/tonFuncionariosService');
const controller = require('../../src/app/controllers/tonFuncionariosController');
const sinon = require('sinon');

describe('Controller', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('Index - async index(req, res, next)', async () => {
    sandbox.stub(service, 'index').returns(Promise.resolve([{ id: 1, nome: 'Renan', idade: 29, cargo: 'Desenvolvedor' }]));
    const req = {}
    const res = {
      send:(code,response) => {
        expect(code).to.be.equal(200)
      }
    }
    controller.index(req, res, sinon.spy());
  });
});
