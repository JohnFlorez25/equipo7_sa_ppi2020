const {Router}=require('express');
const path =require('path');
const router = Router();

const movie = require('../Movies.json'); 
const _ = require('underscore'); 
//Tipo get
router.get('/', (req, res)=> { 
    res.send('<h1>Binvenido a la Clase backend</h1>')
});
router.get('/Saludo', (req, res)=> { 
    res.send('<h1>Hola Brayan</h1>')
});
//Tipo post
router.post('/user', (req, res)=>{
    res.send('<h1>Metodo post</h1>');
    console.log(req.body); 
});
//Tipo put
router.put('/modificar/:id', (req, res)=>{
    console.log(req.body)
    res.send(`<h1>El usuario ${req.params.id} fue actualizado</h1>`);

});


//Delete
router.delete('/eliminar/:id', (req, res)=>{
    console.log(req.body)
    res.send(`<h1>El usuario ${req.params.id} fue eliminado</h1>`);
});
router.get('/Movies', (req,res)=>{
res.json(movie); 
});

//Post para enviar datos de una pelicula nueva

router.post('/Movies', (req,res)=>{
const {Titulo, Director, Categoria, Año} =req.body
if(Titulo && Director && Categoria && Año){
    const id=movie.length + 1;
    const newMovie= {id,...req.body}
    movie.push(newMovie);
    console.log(movie)
    res.json(movie)

}else{
    res.send('Error al ingresar los datos')
}
console.log(req.body)
});
//Put para actualizar una pelicula nueva
router.put('/Movies/:id', (req,res)=>{
    const {Titulo,Director,Categoria,Año}=req.body
    const {id}=req.params;
    if(Titulo && Director && Categoria && Año){
        const{id}=req.params;
        _.each(movie, (movie,i)=>{ 
            if(movie.id==id){
                movie.Titulo=Titulo;
                movie.Director=Director;
                movie.Categoria=Categoria;
                movie.Año=Año;
            }
            

        });
        res.json(movie)
    }
});
//Delete para eliminar
router.delete('Movies/:id', (req, res)=>{
const { id } = req.params;
_.each(movie,(movie,id) =>{
if(movie.id==id){
    movie.splice(i,1)
}
})
res.json(movie); 
});
console.log(movie)
module.exports=router; 