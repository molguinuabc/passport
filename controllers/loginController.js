const jwt = require('jsonwebtoken');
const User = require('../models/user');
const llave = require("../auth/llave");

exports.login = function(req, res) {
  const {username, password } = req.body;
  if ( !(username && password) ) {
    res.status(400).json({ msg: `Formato incorrecto: ${JSON.stringify(req.body)}` });
    return;
  }
  let user = User.findOne(username);
  if (!user) {
    res.status(401). json({msg: "Usuario no encontrado"});
    return;
  }
  if (user.password !== password) {
    res.status(401).json({msg: 'Password incorrecto'});
    return;
  }
  let token = jwt.sign({id: user.id}, llave);
  res.json({msg:"ok", token: token});
}