const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

//functions
const {getHouses, addToHouses} = require('./controller');


massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
})


app.use(express.json());

app.get('/api/houses', getHouses);
app.post('/api/houses', addToHouses);




app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))


