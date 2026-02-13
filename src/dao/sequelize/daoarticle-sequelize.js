const Article = require("./article-model");
const IDAOarticle = require("../idaoarticle");
const ArticleService = require("./daoarticle-sequelize");

class DAOArticleSequelize extends IDAOarticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        return await Article.create(article);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.findAll();
    }

    async modified(article) {
        const modified = await Article.findByPk(article.uid);
        if (!modified) {
            return null;
        }
        return await modified.update(article);
    }

    async deleteArticle(article) {
        const deleted = await Article.findByPk(article.uid);

        return await deleted.destroy(article);
    }
}

module.exports = DAOArticleSequelize;