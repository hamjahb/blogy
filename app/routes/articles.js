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

// export the router so we can use it in server.js file
module.exports = router;

