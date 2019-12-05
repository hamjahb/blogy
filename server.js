// require neccessary NPM packages
const express = require('express');
const mongoose = require('mongoose');

// initialize express application object
const app = express();


// define a port for the API to run on 
const port = process.env.PORT || 5000;

// start the server to listen for a request on a given port
app.listen(port, () => {
    console.log(`bloggy is on port ${port}`);
});