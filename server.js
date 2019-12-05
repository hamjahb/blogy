// require neccessary NPM packages
const express = require('express');
const mongoose = require('mongoose');


// require route files
const indexRouter = require('./app/routes/index');
const articlesRouter = require('./app/routes/articles');


// require DB config files
const db = require('./config/db');


// establish DB connection
mongoose.connect(db, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo');
})

// initialize express application object
const app = express();


// define a port for the API to run on 
const port = process.env.PORT || 5000;


/* Routes */
// mount imported routers
app.use(indexRouter);
app.use(articlesRouter);


// start the server to listen for a request on a given port
app.listen(port, () => {
    console.log(`bloggy is on port ${port}`);
});