module.exports = function logger(action, msg, erro) {
  if (erro) {
    return console.log(`erro:${erro}, action: ${action}, menssage:${msg}`);
  }
  return console.log(`action: ${action}, message:${msg}`);
};
