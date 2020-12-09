const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
host: 'bgdv0xohcwrkpsgznz7h-mysql.services.clever-cloud.com', //'bhmcc4sdnh0dzta51lbc-mysql.services.clever-cloud.com', 
user: 'umo0xwaeiuqvge2s', //'utsbckruw0lqyrk0',
password:'PniJUyJcMeO3Wg3V6qYi', //'FGkDVbTYeimSdGlqmnqg',
database:'bgdv0xohcwrkpsgznz7h', //'bhmcc4sdnh0dzta51lbc',
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