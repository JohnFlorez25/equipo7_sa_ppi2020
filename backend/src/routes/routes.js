const {Router}=require('express');
const path =require('path');
const router = Router();
const mysqlConnection = require('./db/db'); 
 //=================================================usuario
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
    const {NombreUsuario,Apellidos,Correo,Contraseña} = req.body
    let usuario = [NombreUsuario,Apellidos,Correo,Contraseña];
    let nuevousuario = `INSERT INTO usuario(NombreUsuario,Apellidos,Correo,Contraseña)
    VALUES(?,?,?,?);`
    mysqlConnection.query(nuevousuario, usuario, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:` usuario ingresado`}); 
    }); 
});
/*router.put('/cambio_usuario/:Id_usuario', (req,res)=>{
    const {Id_usuario,NombreUsuario,Apellidos,Correo,Contraseña} = req.body
    const { Id_usuario }=req.params;
    mysqlConnection.query(`UPDATE usuario SET  NombreUsuario = ?, Apellidos = ? Correo= ?, Contraseña=? WHERE Id_usuario = ?`,
    [NombreUsuario,Apellidos,Correo,Contraseña,Id_usuario], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'usuario actualizado'});
       }else{
           console.log(err);
       } 
    });
});*/
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
    mysqlConnection.query(donacion, donador, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Donación ingresada`}); 
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
    const {Id_usuario,Donardinero} = req.body
    let donador = [Id_usuario,	Donardinero];
    let donacion = `INSERT INTO Usuario_Donardinero (Id_usuario,	Donardinero)
    VALUES(?,?);`
    mysqlConnection.query(donacion, donador, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Donación ingresada`}); 
    }); 
});

//============================ Juegos
router.get('/juegos', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Juegos ', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/ingreso_juego', (req, res) =>{
    const {Id_Juego,Nivel,Nombre_Juego, Puntos} = req.body
    let jugador = [Id_Juego,Nivel,Nombre_Juego, Puntos];
    let juegos = `INSERT INTO Juegos (Id_Juego,Nivel,Nombre_Juego, Puntos)    VALUES(?,?,?,?);`
    mysqlConnection.query(juegos,jugador, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Estas dentro del juego`}); 
    }); 
});
router.put('/cambio_juego/:Id', (req,res)=>{
    const {Id_Juego,Nivel,Nombre_Juego, Puntos} = req.body
    const { Id }=req.params;
    mysqlConnection.query(`UPDATE Juegos SET Nivel=?, Nombre_Juego = ?, Puntos = ? WHERE Id_Juego = ?`,
    [Nivel,Nombre_Juego, Puntos, Id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Actualizado'});
       }else{
           console.log(err);
       } 
    });
});
router.delete('/Salil_juego/:id', (req,res)=>{
    const {id}=req.params;
    mysqlConnection.query(`DELETE FROM Juegos WHERE Id_Juego = ? `,
    [id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Adios'});
       }else{
           console.log(err);
       } 
    });
});
//============================Usuario_juegos
router.get('/usuariojuegos', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Usuario_juegos', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/datosjugador', (req, res) =>{
    const {Id_usuario,	Id_Juego,	Raking} = req.body
    let jugador = [Id_usuario,	Id_Juego,	Raking];
    let juegos = `INSERT INTO Usuario_juegos (Id_usuario,	Id_Juego,	Raking)    VALUES(?,?,?);`
    mysqlConnection.query(juegos,jugador, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Posición actual`}); 
    }); 
});
router.put('/cambiardatos/:Id', (req,res)=>{
    const {Id_usuario,	Id_Juego,	Raking} = req.body
    const { Id }=req.params;
    mysqlConnection.query(`UPDATE Usuario_juegos SET Id_Juego=?, Raking = ? WHERE Id_usuario = ?`,
    [Id_Juego,	Raking, Id], (err, rows, fields)=>{
       if(!err){
           res.json({status: 'Cambio de posición'});
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
           res.json({status: 'Posicion eliminada'});
       }else{
           console.log(err);
       } 
    });
});

//============================Buscador
router.get('/Historialdebusqueda', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Buscador', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/buscador', (req, res) =>{
    const {Codigonorma,	Buscador} = req.body
    let buscar = [Codigonorma,	Buscador];
    let buscador = `INSERT INTO Buscador (Codigonorma,	Buscador)    VALUES(?,?);`
    mysqlConnection.query(buscador,buscar, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Norma buscada`}); 
    }); 
});

//============================Usuario_Buscador
router.get('/Historial', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Usuario_Buscador', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err); 
        }
    });
});
router.post('/buscador1', (req, res) =>{
    const {Id_usuario,	Id_Buscador} = req.body
    let buscar = [Id_usuario,	Id_Buscador];
    let buscador = `INSERT INTO Buscador (Id_usuario,	Id_Buscador)    VALUES(?,?);`
    mysqlConnection.query(buscador,buscar, (err, results, fields) =>{
        if(err){
            return console.error(err.message);
        }
        res.json({message:`Historial`}); 
    }); 
});

module.exports=router; 