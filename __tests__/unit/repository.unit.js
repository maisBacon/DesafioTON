const { assert, expect } = require('chai');
const repository = require('../../src/app/repository/tonFuncionariosRepository')
const model = require('../../src/app/models/tonFuncionarios')
const sinon = require('sinon');

describe('Repository', () => {
  const sandbox = sinon.createSandbox()

  afterEach(()=> {
    sandbox.restore()
  })

  it('Index - tonFuncionariosModel.findAll()', async () => {
    const stubFind = sandbox.stub(model, 'findAll').returns(Promise.resolve([{nome: 'Renan',idade:29,cargo:'Desenvolvedor'}]));
    const response = await repository.index()
    assert.deepEqual(response, [{
      nome: 'Renan',
      idade: 29,
      cargo: 'Desenvolvedor',
    }]);
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Update - tonFuncionariosModel.findByPk(id)', async () => {
    const stubFind = sandbox.stub(model, 'create').returns(Promise.resolve({ nome: 'Renan', idade: 29, cargo: 'Desenvolvedor' }));
    const response = await repository.store({
      nome: 'Renan',
      idade: 29,
      cargo: 'Desenvolvedor',
    });
    assert.deepEqual(response, {
      nome: 'Renan',
      idade: 29,
      cargo: 'Desenvolvedor',
    });
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Update - tonFuncionariosModel.findByPk(id)', async () => {
    sandbox.stub(repository, 'updateUser').returns(
      Promise.resolve({
        nome: 'Renan Eiras',
        idade: 22,
        cargo: 'Desenvolvedor',
      }),
    );
    const stubFind = sandbox.stub(model, 'findByPk').returns(
      Promise.resolve({
        nome: 'Renan Eiras',
        idade: 29,
        cargo: 'Desenvolvedor',
      }),
    );
    const response = await repository.update({
      nome: 'Renan Eiras',
      idade: 22,
    });
    assert.deepEqual(response, {
      nome: 'Renan Eiras',
      idade: 22,
      cargo: 'Desenvolvedor',
    });
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Delete - tonFuncionariosModel.findByPk(id)', async () => {
    sandbox.stub(repository, 'updateDestroyUser').returns(
      Promise.resolve({
        nome: 'Renan Eiras',
        idade: 22,
        cargo: 'Desenvolvedor',
      }),
    );
    const stubFind = sandbox.stub(model, 'findByPk').returns(
      Promise.resolve({
        nome: 'Renan Eiras',
        idade: 29,
        cargo: 'Desenvolvedor',
      }),
    );
    const response = await repository.delete({
      nome: 'Renan Eiras',
      idade: 29,
      cargo: 'Desenvolvedor',
    });
    assert.deepEqual(response, {
      nome: 'Renan Eiras',
      idade: 29,
      cargo: 'Desenvolvedor',
    });
    expect(stubFind.calledOnce).to.be.ok;
  });
});
