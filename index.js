const express = require('express');
const mongoose = require('mongoose');



/**content of express in app */
const app = express();
const bodyParser = require("body-parser");

/*importing the content of our .en */
require('dotenv').config();
/* */
const cors = require('cors');
/** import the routes file in index.js*/
const routes= require('./routes/routes');

app.use(cors())
app.use(bodyParser.json());

app.use("/",routes)
app.get("/", (req, res) => {
  res.send("success");
});
/**server yekhm mrigl ou non */
/*app.use(express.json());*/

app.listen(3001, () => {
console.log(`Server Started at ${3001}`)
})



const mongoString = process.env.DATABASE_URL

/**connecting database to the server */
mongoose.connect(mongoString);
const database = mongoose.connection






