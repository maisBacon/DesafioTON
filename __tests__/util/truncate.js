const database = require('../../src/database/index')

module.exports = function truncate () {
  return Promise.all(
    Object.keys(database.connection.models).map(key => {
      return database.connection.models[key].destroy({
        truncate: true,
        force: true,
      });
    }),
  );
}


