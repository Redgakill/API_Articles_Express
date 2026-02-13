const mongoose = require("mongoose");

const Article = mongoose.model('Article', {uid: String, title: String}, "article");

module.exports = Article