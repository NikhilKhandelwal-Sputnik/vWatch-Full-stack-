//Server Creation

const express = require('express')

const PORT = 3000;

const app = express()

const connectDB = require('./db/db');
connectDB();

app.use(express.json());

const userRoute = require('./routes/userRoutes')
const productRoute = require('./routes/productRoutes')

app.use('/user',userRoute)
app.use('/product', productRoute)

app.listen(PORT,()=>{
    console.log("Server is runing at port $(PORT)");
})