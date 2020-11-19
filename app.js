const express = require("express");
// import the package

const app = express();
// execute the package

const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors = require('cors');
require("dotenv/config");
// requiring this package gives access to the env file and thus the DB_CONNECTION variable
// further down, adding "process.env.DB_CONNECTION" builds a bridge between the env file and "mongoose.connect"

app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
// removing "posts" from "/posts" means that whenever the routes hits posts, all the posts routes will run
app.use(cors());
app.use('/posts', postsRoute);

// middlewares are functions that executes when routes are being "hit"
// for example below, the console.log will run in terminal when the route is executed.
// app.use('/posts', () => {
//     console.log('This is a middleware running')
// });

// MongoDB (for database) - document type that doesn't have relations.
// it's effectively one object that stores a wealth of information.
// doesn't have relations and tables like in SQL

// With this, routes can now be easily created
app.get("/", (req, res) => {
  res.send("We are on home");
});



// app.get is to listen to the js File,
// request is to the route '/' and res is response

// Connecting to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to DB")
);

app.listen(3000);

// To have the js file connect to the server
