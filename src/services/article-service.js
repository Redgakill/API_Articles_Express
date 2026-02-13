// Import DAOFactory pour récupére notre dao de manière abstraite
const DAOFactory = require("../dao/daoFactory");
const { v4 : uuidv4 } = require('uuid');
module.exports = {

    // Un fonction du metier
    createArticle : async (req) => {
        const generatedId = uuidv4();
        let article = {uid : generatedId, title: req.title, desc: req.desc, auth: req.auth, imgPath: req.imgPath};
        const nouvelleArticle = await DAOFactory.getDAOarticle().insert(article);

        return { code: "200", message: "Article crée", data: nouvelleArticle };
    },

    getAll : async () => {
        // Select all
        const toutMesArticle = await DAOFactory.getDAOarticle().selectAll();

        return { code: "200", message: "La liste des articles a été récupérée avec succès", data: toutMesArticle};
    },

    modifiedArticle: async (req) => {
        const modifiedArticle = await DAOFactory.getDAOarticle().modified(req);

        return { code: "200", message: "Article modifier", data: modifiedArticle };
    },

    deleteArticle: async (req) => {
        const deleteArticle = await DAOFactory.getDAOarticle().deleteArticle(req);
        return ("200 Article supprimé", deleteArticle);
    }

}