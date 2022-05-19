const User = require("../models/user");

exports.getAllUsers = function (req, res) {
  res.status(200).json(User.findAll());
  
}