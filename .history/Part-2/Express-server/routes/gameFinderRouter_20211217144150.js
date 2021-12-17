const express = require('express');
const router = express.Router();
const allGames = require('../allGames');
const { v4: uuidv4 } = require('uuid');



router.get('/allGames/:_id', (req, res) => {
    // res.send(allGames);
    let id = req.params._id;
    let foundObj = allGames.find(eachItem => eachItem._id === id);

    if (foundObj === [] || foundObj === undefined) {
        console.log("Game not found")
        return res.sendStatus(404);
    } else {
        res.send(foundObj);
    }

})



module.exports = router;