const express = require('express')
const path = require('path')

const PORT = 3000;

const app = express()

const connectDB = require('./db/db');
connectDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const userRoute = require('./routes/userRoutes')
const productRoute = require('./routes/productRoutes');
const cmtRouter = require('./routes/cmtRoutes');
const movieRouter = require('./routes/movieRoute')


app.get('/user/signIn', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'loginPage.html');
    console.log('Serving loginPage.html from:', filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending loginPage.html:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.get('/user/register', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'registerPage.html');
    console.log('Serving registerPage.html from:', filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending registerPage.html:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.get(`/user/:id/dashboard`, (req, res) => {
    const filePath = path.join(__dirname, 'public', 'userInfo.html');
    console.log('Serving userInfo.html from:', filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending userInfo.html:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.get(`/movie/:id/info`, (req, res) => {
    const filePath = path.join(__dirname, 'public', 'movInfo.html');
    console.log('Serving movInfo.html from:', filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending movInfo.html:', err);
            res.status(500).send('Internal Server Error');
        }
    });
});

app.use('/user',userRoute)
app.use('/product', productRoute)
app.use('/comments', cmtRouter)
app.use('/movie',movieRouter)

app.listen(PORT,()=>{
    console.log(`Server is runing at port ${PORT}`);
})