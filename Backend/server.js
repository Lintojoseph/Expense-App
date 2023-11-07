const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const ExpenseRouter=require('../Backend/Router/ExpenseRouter')

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());


//router
app.use('/expenses', ExpenseRouter);

//Data base connection
mongoose.connect(process.env.DB)//DB is define in env file
const db=mongoose.connection;
db.on('error',(error)=>console.log(error))
db.once('open',()=> console.log('connected to database'))

//server connection
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });