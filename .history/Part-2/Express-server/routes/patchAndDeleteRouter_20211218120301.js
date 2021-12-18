const express = require('express');
const router = express.Router();
const allGames = require('../allGames');
const { v4: uuidv4 } = require('uuid');



router.patch('/allGames/update/:_id', (req, res) => {
    const id = req.params._id;
    const foundObj = allGames.find(eachItem => eachItem._id === id);

    if (!foundObj) {
        console.log("Game not found")
        return res.status(404).send("The game with the provided id does not exist");
    // } else {
    }

    foundObj.name = req.body.name;
    // console.log(foundObj.name);
    // name = req.body.name;

    foundObj.img = req.body.img;
    // console.log(foundObj.img);
    // img = req.body.img;
    // console.log(foundObj.cross_platform);
    foundObj.cross_platform = (req.body.cross_platform.toLowerCase() === 'true');
    console.log(foundObj.cross_platform);

    // console.log(foundObj.price);
    foundObj.price = parseInt(req.body.price);
    console.log(foundObj.price);


    console.log(foundObj.genres);
    foundObj.genres = req.body.genres;
    console.log(foundObj.genres);

    console.log("Game successfully updated");
    res.sendStatus(200);

})

router.delete('/allGames/delete/:_id', (req, res)=> {

    let id = req.params._id;

    let foundObj = allGames.findIndex(eachItem => eachItem._id === id);

    // if (foundObj < 0) {
    //     console.log("Item not found");
    //     res.sendStatus(404);
    if (!foundObj) {
        console.log("Game not found");
        res.status(404).send("The game with the provided id can't be found");
    } else {
        allGames.splice(foundObj, 1);
        console.log("Successfully deleted");
        res.sendStatus(200);
    }

})



module.exports = router;