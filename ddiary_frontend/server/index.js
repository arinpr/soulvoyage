// server/index.js
const path = require('path');
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const session = require('express-session');
const flash = require('connect-flash')
const {isLoggedIn} = require('./middleware')

const PORT = process.env.PORT || 5001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/built')));

app.get("/api/v1", (req, res) => {
    res.send("hello from server!!!!");
  });

// // Handle client routing, return all requests to the app
// app.get('*', (_req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   });

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
//   });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});