const users = [
  {
    id: 1,
    username: 'jcamaney',
    password: 'secret'
  },
  {
    id: 2,
    username: 'spongebob',
    password: 'secret2'
  }
]
exports.findOne = function(username) {
  let usuario = users.find( user => {
    return username === user.username;
  });
  return usuario;
}

exports.findById = function(id) {
  let usuario = users.find ( user => {
    return id === user.id;
  });
  return usuario;
}

exports.findAll = function () {
  return users;
}