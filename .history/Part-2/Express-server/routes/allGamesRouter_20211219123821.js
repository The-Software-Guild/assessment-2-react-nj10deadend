const express = require('express');
const router = express.Router();
const allGames = require('../allGames');
const { v4: uuidv4 } = require('uuid');



router.get('/allGames', (req, res) => {
    res.send(allGames);
})

router.post('/allGames', (req, res, err) => {

    let sameObj = allGames.find(eachItem => eachItem.name === req.body.name)

    let newObj;
    if (sameObj) {
        console.log("Game already exists in database.");
        res.send("Game already exists in database.");
    } else {

        let parsedBoolCrossPlat;
        if (typeof(req.body.cross_platform) === "string") {
            parsedBoolCrossPlat = req.body.cross_platform.toLowerCase() === "true"
        } else {
            parsedBoolCrossPlat = req.body.cross_platform;
        }
        newObj = {
            name: req.body.name,
            img: req.body.img,
            cross_platform: parsedBoolCrossPlat,
            price: parseInt(req.body.price),
            genres: req.body.genres,
            _id: uuidv4()
        }
        allGames.push(newObj);
        console.log("Successfully added item");
        ///
    } 
    res.status(201).send(newObj);

})



module.exports = router;