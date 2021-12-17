const express = require('express');
const router = express.Router();
const games = require('./games');
const allGames = require('./allGames').favGames;

console.log(allGames);



module.exports = router;