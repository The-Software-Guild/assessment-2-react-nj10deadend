const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();
const allGamesRouter = require('./routes/allGamesRouter');


app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/allGames', allGamesRouter);

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
    res.json({
        message: err.message,
        error: err
    });
});


app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`)
})

// module.exports = app;
// module.exports = favGames;