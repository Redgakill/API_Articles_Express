module.exports = {
    connect_sequelize : () => {
        // Se connecter à la base
        const sequelize = require('./database');

        sequelize.authenticate()
            .then(() => {
                // Log
                console.log('Connexion MySQL OK')
                // DEV MODE
                const Article = require('./article-model');
                // tester qu'il creer les tables pour nous
                sequelize.sync()
                    .then(() => console.log('Tables synchronisées'))
                    .catch(err => console.error(err))
            })
            .catch(err => console.error('Erreur MySQL', err))
    }
}