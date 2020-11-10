const {Router}=require('express');
const path =require('path');
const router = Router();
const mysqlConnection = require('./db/db'); 
 
router.get('/usuario', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/nuevo_usuario', (req, res) =>{
    const {Id_Usuario,Id_Contrasena,Id_Correo} = req.body
    let usuario = [Id_Usuario,Id_Contrasena,Id_Correo];
    let nuevousuario = `INSERT INTO usuario(Id_Usuario, Id_Contrasena, Id_Correo)
    VALUES(?,?,?);`
    mysqlConnection.query(nuevousuario, usuario, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Tipo usuario ingresado`}); 
    }); 
});
router.put('/cambio_usuario/:Id', (req,res)=>{
    const {Id_Usuario,Id_Contrasena,Id_Correo} = req.body
    const { Id }=req.params;
    mysqlConnection.query(`UPDATE usuario SET  Id_Contrasena = ?, Id_Correo = ? WHERE Id_Usuario = ?`,
    [Id_Contrasena,Id_Correo,Id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Tipo usuario actualizado'});
       }else{
           console.log(err);
       } 
    });
});
router.delete('/eliminar_usuario/:id', (req,res)=>{
    const {id}=req.params;
    mysqlConnection.query(`DELETE FROM usuario WHERE Id_Usuario = ? `,
    [id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Usuario eliminado'});
       }else{
           console.log(err);
       } 
    });
});

//================================ Usuario_Donardinero
router.get('/donadores', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Usuario_Donardinero', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/usuario_donardinero', (req, res) =>{
    const {Id_Usuario, Donardinero} = req.body
    let donador = [Id_Usuario, Donardinero];
    let donacion = `INSERT INTO Usuario_Donardinero (Id_Usuario, Donardinero)
    VALUES(?,?);`
    mysqlConnection.query(donador, donacion, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Donación ingresada`}); 
    }); 
});
router.put('/cambio_donador/:Id', (req,res)=>{
    const {Id_Usuario, Donardinero} = req.body
    const { Id }=req.params;
    mysqlConnection.query(`UPDATE Usuario_Donardinero SET  Donardinero = ? WHERE Id_Usuario = ?`,
    [Id_Usuario, Donardinero,Id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Tipo usuario actualizado'});
       }else{
           console.log(err);
       } 
    });
});
router.delete('/eliminar_donador/:id', (req,res)=>{
    const {id}=req.params;
    mysqlConnection.query(`DELETE FROM Usuario_Donardinero WHERE Id_Usuario = ? `,
    [id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Usuario eliminado'});
       }else{
           console.log(err);
       } 
    });
});
//===============================Donardinero
router.get('/donardinero', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Donardinero', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/ingreso_donacion', (req, res) =>{
    const {Donardinero,	Tipopago} = req.body
    let donador = [Donardinero,	Tipopago];
    let donacion = `INSERT INTO Donardinero (Donardinero,	Tipopago)
    VALUES(?,?);`
    mysqlConnection.query(donador, donacion, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Donación ingresada`}); 
    }); 
});
router.put('/cambio_ingreso/:Id', (req,res)=>{
    const {Donardinero,	Tipopago} = req.body
    const { Id }=req.params;
    mysqlConnection.query(`UPDATE Donardinero SET  Tipopago = ? WHERE Donardinero = ?`,
    [Tipopago, Donardinero,Id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Donación actualizada actualizado'});
       }else{
           console.log(err);
       } 
    });
});
router.delete('/eliminar_donacion/:id', (req,res)=>{
    const {id}=req.params;
    mysqlConnection.query(`DELETE FROM Donardinero WHERE Donardinero = ? `,
    [id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Donación eliminada'});
       }else{
           console.log(err);
       } 
    });
});
//============================ Usuario_juego
router.get('/Usuario_juegos', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Usuario_juegos   ', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/ingreso_juego', (req, res) =>{
    const {Id_Usuario,	Id_Juego,	Raking} = req.body
    let jugador = [Id_Usuario,	Id_Juego,	Raking];
    let juegos = `INSERT INTO Usuario_juegos (Id_Usuario,	Id_Juego,	Raking)
    VALUES(?,?,?);`
    mysqlConnection.query(jugador, juegos, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Estas dentro del juego`}); 
    }); 
});
router.put('/cambio_juego/:Id', (req,res)=>{
    const {Id_Usuario,	Id_Juego,	Raking} = req.body
    const { Id }=req.params;
    mysqlConnection.query(`UPDATE Usuario_juegos SET Id_Juego=?, Raking = ? WHERE Id_Usuario = ?`,
    [Id_Juego, Raking,Id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Modo de juego cambiado'});
       }else{
           console.log(err);
       } 
    });
});
router.delete('/Salil_juego/:id', (req,res)=>{
    const {id}=req.params;
    mysqlConnection.query(`DELETE FROM Usuario_juegos WHERE Id_Juego = ? `,
    [id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Saliste con exito'});
       }else{
           console.log(err);
       } 
    });
});
//============================


//============================

//============================

//============================

//============================

module.exports=router; 