const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");

class DAOArticleMongoose extends IDAOArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        // Intancier l'objet
        const nouvelleArticle = new Article(article);
        // Save
        return await nouvelleArticle.save();
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.find();
    }

    async modified(article) {
        const modified = await Article.findOneAndUpdate({ uid: article.uid},
            { $set: {title: article.title,
                    desc: article.desc,
                    auth: article.auth,
                    imgPath: article.imgPath}
            });

        return await modified;
    }

    async deleteArticle(article) {

        const deleted = await Article.findOneAndDelete(
            { uid: article.uid }
        );

        return deleted || null;
    }
}

module.exports = DAOArticleMongoose;