//Import du package HTTP de Node.js pour avoir les outils permettant de créer le serveur
const http = require("http");

//Import app.js
const app = require("./app");

//Import de dotenv
const dotenv = require("dotenv").config({ path: "./config/.env" });

//Paramétrage du port avec la méthode set de Express
app.set("port", process.env.PORT);

//La méthode createServer() prend en argument la fonction qui sera appelée à chaque requête reçue par le serveur. Ici, les fonctions seront dans app.js
const server = http.createServer(app);

//Le serveur écoute les requêtes sur le port
server.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
