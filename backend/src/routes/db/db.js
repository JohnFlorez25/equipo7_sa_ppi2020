const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
host: 'bw3xkl5kn8od2ahnd72j-mysql.services.clever-cloud.com', //'barbmbyc2hpnnblvyy0t-mysql.services.clever-cloud.com',
user: 'udltekenxjqy5drz',//'uwsmx2pbkf3pdzai', 
password:'SVIW1lBnBQgkMXelKoAn',//'QQEvP78iYzt1lh9Igt2E',
database: 'bw3xkl5kn8od2ahnd72j',//'barbmbyc2hpnnblvyy0t',
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