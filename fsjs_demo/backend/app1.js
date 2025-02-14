require('dotenv').config({path: './.env'})

const express = require('express');

const app = express();

// 1er middleware : affichage dans la console
app.use((req,res) =>{
    console.log(req.methode);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('Le serveur Express dit <b>Coucou</b>');
});

// 2eme middleware : preparation de la reponse

app.use((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});

// 3eme middleware: envoi de la reponse 

app.use((req,res) =>{
    res.end('Le serveur Express dit <b>Coucou</b>');
});

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Le server écoute sur http://127.0.01:${port}/`);
})

//module.exports=app;