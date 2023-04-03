require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const session = require('express-session');
const corsMiddleware = require("./middlewares/cors");




// Middleware to enable CORS
app.use(corsMiddleware);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

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

const ReviewsRoute = require('./routes/reviews');
app.use('/reviews', ReviewsRoute);

const AlertsRoute = require("./routes/alerts");
app.use("/alerts", AlertsRoute);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);



// Start the HTTP server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});