const { assert, expect } = require('chai');
const Controller = require('../../src/app/controllers/tonFuncionariosController')
const sinon = require('sinon');

describe('App', () => {
  // const sandbox = sinon.sandbox.create()

  it('teste', async () => {
    sinon.stub(Controller, 'index').returns(Promise.resolve('ok'));
    const res = await Controller.index('ok');
    assert.deepEqual(res, 'ok');
  });
});
