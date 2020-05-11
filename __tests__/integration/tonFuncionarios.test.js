const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../util/truncate')

describe('Funcionarios', () => {

  // beforeEach(async ()=> {
  //   await truncate()
  // })

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

    it.only('err', async () => {
      const response = await request(app)
        .delete('/:id')
        .send({
          id:1
        })
      expect(response.body).toStrictEqual({
        code: '490',
        message: 'parametros inválidos',
      });
    });
});
