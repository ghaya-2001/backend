const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
/**content of express in app */
const app = express();
/* */
app.options( cors())
/**server yekhm mrigl ou non  */
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

/**importing the content of our .en */
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

/**connecting database to the server */
mongoose.connect(mongoString);
const database = mongoose.connection

/**success or error msg */
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


/** import the routes file in index.js*/
const routes = require('./routes/routes');

app.use('/api', routes, cors())