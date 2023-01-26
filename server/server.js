//imports packages
const http = require("http");

//imports fichiers
const app = require("./app");
const dotenv = require("dotenv").config({ path: "./config/.env" });

//paramétrage du port avec la méthode set de Express
app.set("port", process.env.PORT);

//la méthode createServer() prend en argument la fonction qui sera appelée à chaque requête reçue par le serveur. Ici, les fonctions seront dans app.js
const server = http.createServer(app);

//le serveur écoute les requêtes sur le port
server.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
