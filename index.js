const passport = require("./auth/passport");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fs = require("fs");
const https = require("https");
const router = require("./routes");

process.env.host = "localhost";
process.env.port = 4001;

app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.json());
app.use(router);
//  openssl req -x509 -newkey rsa:4096 -sha256 -keyout private.key -out certificate.crt  -days 600
const llavePrivada = fs.readFileSync("server.key");
const certificado = fs.readFileSync("server.crt");
const credenciales = {
  key: llavePrivada,
  cert: certificado,
  passphrase: "password" //passwd de la llave privada usado en la creación del certificado
};
const httpsServer = https.createServer(credenciales, app);

httpsServer.listen(process.env.port, () => {
  console.log('Servidor https escuchando por el puerto:', process.env.port);
}).on('error', err => {
  console.log('Error al inciar el servidor:', err);
});