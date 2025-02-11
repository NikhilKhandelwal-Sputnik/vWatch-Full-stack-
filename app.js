//Server Creation

const express = require('express')

const PORT = 3000;

const app = express()

const connectDB = require('./db/db');
connectDB();

app.use(express.json());

const userRoute = require('./routes/userRoutes')

app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log("Server is runing at 3000");
})