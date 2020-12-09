const express = require('express');//La variable "express" quiere decir que requiere de la libreria express
const path=require('path');
const cors = require('cors');
const morgan = require ('morgan');
const app = express() // Creamos un objeto llamado "app" que lleva todo los elementos de express

app.use(express.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","ACTION, GET,POST HEAD");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-Whith,Content-Type,Accept, Authorization");
    next()

    })

const router = require ('./routes/routes');
app.use('/api/', router);
app.use(express.urlencoded({extended: false}))//analiza la url y la codifica
app.use(morgan('dev'));
app.listen(3001, ()=>{
 console.log('Servidor ha sido iniciado'); 
});
