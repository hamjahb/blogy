// require neccessary NPM packages
const express = require('express');
const mongoose = require('mongoose');

// initiate a router (mini app that handles routes)
const router = express.Router();

/**
 * Action:      INDEX
 * Method:      GET
 * URI:         /
 * Description: get the Root route
 */

 router.get('/', (req, res) => {
    res.json({message: 'Welcome to bloggy'})
 })

// export the router so we can use it in server.js file
module.exports = router;

