const express = require('express')
const router = express.Router()
const ArticleService = require('../services/article-service');

router.post("/save", async (req, response) => {

    const serviceResponse = await ArticleService.createArticle(req.body);

    return response.json(serviceResponse);
});

router.get("/", async (req, response) => {

    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

router.post("/modified", async (req, response) => {
    const serviceResponse = await ArticleService.modifiedArticle(req.body);

    return response.json(serviceResponse);
})

router.delete("/delete", async (req, response) => {
    const serviceResponse = await ArticleService.deleteArticle(req.body);

    return response.json(serviceResponse);
})

module.exports = router