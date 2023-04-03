require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware to enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const DB = process.env.MONGO_URL;
const PORT = 4000;

// Connect to MongoDB
mongoose.connect(
    DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to Database");
    })
    .catch(err => console.log(err))

// Middleware for parsing JSON
app.use(bodyParser.json());

// Example route
app.get("/", (req, res) => {
    res.send("reached homepage");
});

// User routes
const UsersRoute = require('./routes/users.js');
app.use('/users', UsersRoute);

const BusinessesRoute = require('./routes/businesses');
app.use('/businesses', BusinessesRoute);

const JobsRoute = require('./routes/jobs');
app.use('/jobs', JobsRoute);

const PasswordsRoute = require('./routes/passwords');
app.use('/passwords', PasswordsRoute);

// Start the HTTP server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});