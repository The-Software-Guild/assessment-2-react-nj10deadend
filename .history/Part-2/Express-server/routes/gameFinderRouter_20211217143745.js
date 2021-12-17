const express = require('express');
const router = express.Router();
const allGames = require('../allGames');
const { v4: uuidv4 } = require('uuid');



router.get('/allGames/:_id', (req, res) => {
    // res.send(allGames);
})



module.exports = router;