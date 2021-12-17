const express = require('express');
const router = express.Router();
const allGames = require('../allGames');
const { v4: uuidv4 } = require('uuid');



router.get('/allGames', (req, res) => {
    res.send(allGames);
})

router.post('/allGames', (req, res, err) => {

    console.log(req.body.name);


    let sameObj = allGames.find(eachItem => eachItem.name === req.body.name)
    // console.log(sameObj);
    if (sameObj) {
        console.log("Game already exists in database");
    } else {
        allGames.push({
            name: req.body.name,
            img: req.body.img,
            cross_platform: req.body.cross_platform,
            price: parseInt(req.body.price),
            genres: req.body.genres, 
            _id: uuidv4()
        })
        console.log("Successfully added item");
    } 

    // res.send("Game sucessfully added!")
    res.sendStatus(200);

})



module.exports = router;