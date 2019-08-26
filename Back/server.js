const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./Routes/index');
const bodyParser = require('body-parser');
const port = 4000;

app.use(cors())
require('dotenv').config();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


app.use('/auth', routes.Auth)
app.get("/", (req, res) => {
    res.status(200).send("It's your Home Page")
})


app.listen(port, (err) => {
    if(err) {
        throw new Error('Something bad happened ...')
    }
    console.log(`Server is listening on ${port}`)
})