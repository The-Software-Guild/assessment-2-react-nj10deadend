const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

const favGames = [
    {
        name: "Bloodborne", 
        img: "hard", 
        cross_platform: false,
        price: 20,
        genres: ["Action", "RPG"]
    },
    {
        name: "Sekiro", 
        img: "hard", 
        cross_platform: true,
        price: 60,
        genres: ["Action", "RPG"]
    },
    {
        name: "Portal 2", 
        img: "medium", 
        cross_platform: true,
        price: 10,
        genres: ["Puzzle", "Adventure", "Platformer"]
    },
    {
        name: "Kingdom Hearts 2 Final Mix", 
        img: "https://middleofnowheregaming.files.wordpress.com/2014/12/kh-2-final-mix-header.jpg?w=1200", 
        cross_platform: false,
        price: 60,
        genres: ["Action", "JRPG"]
    }
]

app.use(bodyParser.urlencoded({extended: true}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


/// error handler

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;