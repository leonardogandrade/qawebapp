const express = require('express');
const server = express();
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors');
const requireDir = require('require-dir');

//Database connection
try{
    mongoose.connect('mongodb://127.0.0.1:27017/qawebapp',{useNewUrlParser : true, useUnifiedTopology : true});
    console.log('Mongoose database connection was successfully stablelished.');
}catch(err){
    console.log(`Mongoose database connection Error:  ${err}`);
}

//Modules
requireDir('./src/models');


//Essential modules
server.use(express.json());
server.use(cors());

//Routes
server.use('/api',require('./src/routes'));

server.listen(process.env.PORT);
console.log(`server is listenning on port ${process.env.PORT}`);