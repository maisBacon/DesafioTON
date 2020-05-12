const { assert, expect } = require('chai');
const service = require('../../src/app/service/tonFuncionariosService');
const logsService = require('../../src/app/service/logsService');
const repository = require('../../src/app/repository/tonFuncionariosRepository');
const sinon = require('sinon');

describe('Service', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('Index - tonFuncionariosModel.findAll()', async () => {
    const stubFind = sandbox
      .stub(repository, 'index')
      .returns(
        Promise.resolve([{ id: 1, nome: 'Renan', idade: 29, cargo: 'Desenvolvedor' }]),
      );
    const response = await service.index();
    assert.deepEqual(response, [
      {
        id: 1,
        nome: 'Renan',
        idade: 29,
        cargo: 'Desenvolvedor',
      },
    ]);
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Index - tonFuncionariosModel.findAll() return undefined', async () => {
    const stubFind = sandbox
      .stub(repository, 'index')
      .returns(
        Promise.resolve([]),
      );
    const response = await service.index();
    assert.deepEqual(response, undefined);
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Store - tonFuncionariosRepository.store(nome, idade, cargo)', async () => {
    const stubFind = sandbox
      .stub(repository, 'store')
      .returns(
        Promise.resolve(
          { id: 1, nome: 'Renan', idade: 29, cargo: 'Desenvolvedor' },
        ),
      );
    const response = await service.store();
    assert.deepEqual(response,
      {
        nome: 'Renan',
        idade: 29,
        cargo: 'Desenvolvedor',
      },
    );
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Update - tonFuncionariosRepository.store(nome, idade, cargo)', async () => {
    const stubFind = sandbox.stub(repository, 'update').returns(
      Promise.resolve({
        nome: 'Renan',
        idade: 22,
        cargo: 'Desenvolvedor',
      }),
    );
    const response = await service.update(1,'Renan',22,'Desenvolvedor');
    assert.deepEqual(response, {
      nome: 'Renan',
      idade: 22,
      cargo: 'Desenvolvedor',
    });
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Update - tonFuncionariosRepository.store(nome, idade, cargo) return undefined', async () => {
    const stubFind = sandbox.stub(repository, 'update').returns(
      Promise.resolve(undefined),
    );
    const response = await service.update(1, 'Renan', 22, 'Desenvolvedor');
    assert.deepEqual(response, undefined);
    expect(stubFind.calledOnce).to.be.ok;
  });

  it('Delete - tonFuncionariosRepository.delete(id)', async () => {
    const stubFind = sandbox
      .stub(repository, 'delete')
      .returns(
        Promise.resolve({
          id: 1,
          nome: 'Renan',
          idade: 29,
          cargo: 'Desenvolvedor',
        }),
      );
    const response = await service.delete(1);
    assert.deepEqual(response, {
      id: 1,
      nome: 'Renan',
      idade: 29,
      cargo: 'Desenvolvedor',
    });
    expect(stubFind.calledOnce).to.be.ok;
  });
});
