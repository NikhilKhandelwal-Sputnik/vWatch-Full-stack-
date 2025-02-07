const express = require('express')

const PORT = 3000;

const app = express()

const connectDB = require('./db/db');
connectDB();

const userRoute = require('./routes/userRoutes')

app

app.listen(PORT,()=>{
    console.log("Server is runing at 3000");
})