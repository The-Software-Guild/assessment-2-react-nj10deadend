const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));





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