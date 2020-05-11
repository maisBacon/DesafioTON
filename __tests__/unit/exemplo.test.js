const controller = require('../../src/app/controllers/tonFuncionariosController')
const sinon = require('sinon')

describe('Funcionarios', () => {
const sandbox = sinon.sandbox.create()

  afterEach(()=> {
    sandbox.restore()
  })

  it('cadastrando um funcionário', async () => {
    sandbox.stub(controller, 'index').returns(Promise.resolve('s'));
    const res = {
      send: (code,res) => {
        expect(code).to.be.equal(200)
        expect(res).to.be.equal('s');
      }
    };
    controller.index(req,res,sinon.spy())
})
})
