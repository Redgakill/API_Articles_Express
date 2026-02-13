require('dotenv').config()

const express = require('express');
const cors = require('cors');

// Initialiser l'application back
const app = express();
app.use(express.json());
app.use(cors());

// MODE : SEQUELIZE
if (process.env.BDD_MODE === "sequelize") {
    require("./dao/sequelize/connexion").connect_sequelize();
}
// MODE : Mongoose
else if (process.env.BDD_MODE === "mongodb") {
    require("./dao/mongoose/connexion").connect_mongoose();
}

// Injecter route externe
// -- importer
const articleroute = require('./routes/article-route')
// -- injecter dans le serveur
app.use(express.json());
app.use('/articles', articleroute);

// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});