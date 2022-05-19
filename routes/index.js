const express = require('express');
const router = express.Router();
const passport = require("../auth/passport");

const userController = require("../controllers/userController");
const loginController = require('../controllers/loginController');

router.use(express.json());

router.post('/login', loginController.login);
router.get("/", function(req,res){
  res.header("Content-type","text/html")
  res.send(`
<html>
<head></head>
<body>
<H1>Accediendo con HTTPS</H1>
</body>
</html>`);
});
router.get('/users', passport.authenticate("jwt",{session: false}),userController.getAllUsers);

module.exports = router;