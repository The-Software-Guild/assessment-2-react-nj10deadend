const express = require('express');
const router = express.Router();
const allGames = require('../allGames');
const { v4: uuidv4 } = require('uuid');



router.patch('/allGames/update/:_id', (req, res) => {
    const id = req.params._id;
    const foundObj = allGames.find(eachItem => eachItem._id === id);
    console.log(foundObj);

    if (!foundObj) {
        console.log("Game not found")
        return res.status(404).send("The game with the provided id does not exist");
    }

    if (req.body.name){

        foundObj.name = req.body.name;
    } 

    if (req.body.img) {
        foundObj.img = req.body.img;
        
    }

    if (req.body.cross_platform) {

        foundObj.cross_platform = (req.body.cross_platform.toLowerCase() === 'true');
    }

    if (req.body.price) {

        foundObj.price = parseInt(req.body.price);
    }

    if (req.body.genres) {
        foundObj.genres = req.body.genres;
    }

    console.log("Game successfully updated");
    console.log(foundObj);
    res.sendStatus(200);

})

router.delete('/allGames/delete/:_id', (req, res)=> {

    let id = req.params._id;

    let foundObj = allGames.findIndex(eachItem => eachItem._id === id);

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