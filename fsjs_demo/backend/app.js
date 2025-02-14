require('dotenv').config({path: './.env'})

const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use((req,res,next) => {
    const now = new Date().toDateString();
    console.log(`${now} : une requête ${req.methode} est arrivée !` );
    next();
});

app.use((req,res)=>{
    const user = req.query.nickname || undefined;
    const sex = req.query.sex || undefined;

    res.render('pages/home',{user, sex});
});

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, '/public/pages/index.html'));
});

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.01:${port}/`);
})