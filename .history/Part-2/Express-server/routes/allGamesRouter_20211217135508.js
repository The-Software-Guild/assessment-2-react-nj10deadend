const express = require('express');
const router = express.Router();
const allGames = require('../allGames');


router.get('/allGames', (req, res) => {
    res.send(allGames);
})



module.exports = router;