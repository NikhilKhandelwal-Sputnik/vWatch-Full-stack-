const express = require('express')
const path = require('path')

const PORT = 3000;

const app = express()

const connectDB = require('./db/db');
connectDB();

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const userRoute = require('./routes/userRoutes')
const productRoute = require('./routes/productRoutes')

app.use('/user',userRoute)
app.use('/product', productRoute)

app.get('/user/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'loginPage.html'));
});
app.get('/user/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registerPage.html'));
});


app.listen(PORT,()=>{
    console.log('Server is runing at port $(PORT)');
})