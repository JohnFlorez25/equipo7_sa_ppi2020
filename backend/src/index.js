const express = require('express');//La variable "express" quiere decir que requiere de la libreria express
const path=require('path');
const cors = require('cors');
const morgan = require ('morgan');
const app = express() // Creamos un objeto llamado "app" que lleva todo los elementos de express

app.use(express.json());

const router = require ('./routes/routes');
app.use('/api/', router);

app.use(morgan('dev'));
app.listen(3000, ()=>{
 console.log('Servidor ha sido iniciado'); 
});