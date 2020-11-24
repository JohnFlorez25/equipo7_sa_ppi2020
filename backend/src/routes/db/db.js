const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
host: 'bhmcc4sdnh0dzta51lbc-mysql.services.clever-cloud.com', 
user: 'utsbckruw0lqyrk0',
password:'FGkDVbTYeimSdGlqmnqg',
database: 'bhmcc4sdnh0dzta51lbc',
multiStatements: true
}); 
mysqlConnection.connect(function(err) {
    if (err){
        console.log(err);
        return;
    }else{
        console.log('Base de datos conectada'); 
    }
}); 
module.exports = mysqlConnection; 