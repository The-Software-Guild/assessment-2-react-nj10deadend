const express = require('express');
const router = express.Router();
const allGames = require('../allGames');

console.log(allGames);

router.get('/favGames', (req, res) => {
    res.send(allGames);
})



module.exports = router;