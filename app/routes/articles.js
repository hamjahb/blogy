// require neccessary NPM packages
const express = require('express');
const mongoose = require('mongoose');

// initiate a router (mini app that handles routes)
const router = express.Router();

// require Mongoose model for Article
const Article = require('../models/article')


/* 
Action:      INDEX
Method:      GET
URI:        /api/articles
Description: Get all articles
*/

router.get('/api/articles', (req, res) => {
    Article.find({})
    // return all articles as an array
    .then((articles) => {
        res.status(200).json({articles: articles})
    })
    // catch any error that may occur
    .catch((error) => {
        res.status(500).json({error: error})
    })
 })


/* 
Action:      SHOW
Method:      GET
URI:        /api/articles/42x3sdc5vfg6fb7h8njki9
Description: Get an article by article ID
*/


/* 
Action:      CREATE
Method:      POST
URI:        /api/articles
Description: create a new article
*/
router.post('/api/articles', (req, res) => {
    Article.create(req.body.article)
/*  on a succesful create action respond with 201
    http status and content of new article */
    .then((newArticle) => {
        res.status(201).json({article: newArticle})
    })
/*  catch any error that may occur */
    .catch((error) => {
        res.status(500).json({error: error})
    })
})

/* 
Action:      UPDATE
Method:      PATCH
URI:        /api/articles/x132dcf4vgb5h7n6j
Description: update a spacific article
*/


/* 
Action:      DESTROY
Method:      DELETE
URI:        /api/articles/9plok8m7nijh6ubg5vyft4
Description: delete a spacific article with article ID
*/
router.delete('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
    .then ((article) => {
        if (article) {
            // pass the result of mongose  .delete method to next.then statment
            return article.remove();
        } else {
            // if we couldent find a document with the matching ID
            res.status(404).json({
                error: {
                    name: "DocumentNotFound Error",
                    message: "The Provided ID does not match any documents"
                }
            })
        }
    })
    .then(() => {
        // if delete succeded, return 204 and no JSON
        res.status(204).end();
    })
    // catch any errors that may occur
    .catch((error) => {
        res.status(500).json({error: error})
    })
})

// export the router so we can use it in server.js file
module.exports = router;

