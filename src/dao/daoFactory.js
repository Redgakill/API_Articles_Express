module.exports = {

    /**
     * Retourne un IDAOarticle
     */
    getDAOarticle : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOarticleSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOarticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOGameMongoose = require("./mongoose/daoarticle-mongoose");
            return new DAOGameMongoose();
        }
    }
}