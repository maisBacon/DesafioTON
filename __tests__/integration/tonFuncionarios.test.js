const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../util/truncate')

describe('Funcionarios', () => {

  beforeEach( async ()=> {
    await truncate()
  })

  it('listando funcionarios sem nenhum cadastrado na base', async () => {
    const response = await request(app)
      .get('/')
      .send({});
    expect(response.body).toStrictEqual({
      code: '470',
      message: 'Sem funcionarios cadastrados',
    });
  });

  it('cadastrando um funcionário', async () => {
    const response = await request(app)
      .post('/')
      .send({
        nome: 'Renan Eiras Melo',
        idade: '29',
        cargo: 'Desenvolvedor',
      });
    expect(response.body).toStrictEqual({message: 'funcionário cadastrado'});
  });

    it('parametros inválidos', async () => {
      const response = await request(app)
        .post('/')
        .send({
          nome: 'Renan Eiras Melo',
          idade: '29'
        });
      expect(response.body).toStrictEqual({
        code: '490',
        message: 'parametros inválidos',
      });
    });

    it('listando funcionarios 1 cadastrado na base', async () => {
      const response = await request(app)
        .get('/')
        .send({});
      expect(response.body).toStrictEqual([
        { cargo: 'Desenvolvedor', id: 2, idade: 29, nome: 'Renan Eiras Melo' },
      ]);
    });
});
