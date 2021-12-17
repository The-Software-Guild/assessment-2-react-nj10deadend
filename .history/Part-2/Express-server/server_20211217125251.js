const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})