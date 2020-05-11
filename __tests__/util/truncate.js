const datadabe = require('../../src/database')

module.exports = () => {
  return Promise.all(
    Object.keys(datadabe.connection.models).map(key => {
      return datadabe. connection.models[key].destroy({ truncate: true, force:true})
    })
  )
}


