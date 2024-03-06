// configure dotenv
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT 
const mongoURI = process.env.MONGODB_URI
const taskRoutes = require('./routes/taskRoutes')

// setup middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/tasks',taskRoutes);

// mongodb connection
mongoose.connect(mongoURI)
console.log('connected to DB')

// simple get
app.get('/',(req,res) => {
    res.send('Hello World!')
})

// setup routes


// setup 
app.listen(PORT,() => {
    console.log(`Server started on ${PORT} ...`)
})