const { v4: uuidv4 } = require('uuid');


const favGames = [
    {
        name: "Bloodborne", 
        img: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png", 
        cross_platform: false,
        price: 20,
        genres: ["Action", "RPG"],
        _id: uuidv4(),
    },
    {
        name: "Sekiro", 
        img: "https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1603904569", 
        cross_platform: true,
        price: 60,
        genres: ["Action", "RPG"],
        _id: uuidv4()
    },
    {
        name: "Portal 2", 
        // img: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg?t=1610490805", 
        img: "https://cdn.mos.cms.futurecdn.net/ZJjb6j5yr3j6hCqaw8e5uQ.jpg",
        cross_platform: true,
        price: 10,
        genres: ["Puzzle", "Adventure", "Platformer"],
        _id: uuidv4()
    },
    {
        name: "Kingdom Hearts 2 Final Mix", 
        img: "https://middleofnowheregaming.files.wordpress.com/2014/12/kh-2-final-mix-header.jpg?w=1200", 
        cross_platform: true,
        price: 60,
        genres: ["Action", "JRPG"],
        _id: uuidv4()
    }
]
 // "test": "echo \"Error: no test specified\" && exit 1",

module.exports = favGames;
