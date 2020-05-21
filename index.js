const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Import Routes
const authRoutes = require('./routes/auth');
const postRoute = require('./routes/posts');
dotenv.config();

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to DB'));

//middlewares
app.use(express.json());

//route middlewares
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoute);

//server port
app.listen(3000 ,()=>{console.log('server is up')});