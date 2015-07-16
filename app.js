var express    = require("express");
var mysql      = require('mysql');
var app = express();

var connectionInfo = {
  host     : 'localhost',  // mysql server hostname 
  user     : 'root',       // mysql database user name
  password : 'root',       // mysql database password
  database : 'node_mysql'  // mysql database name
}

var connection = mysql.createConnection(connectionInfo);

connection.connect(function(err){
 if(!err) {
    console.log("Database is connected successfully. \n");  
  } else {
   console.error('Error connecting: ' + err.stack);
   return;
  }
});

var query = 'SELECT * FROM posts';

connection.query(query, function(err, rows, fields) {
	console.log("Executing query: "+query+' \n');
	connection.end();
    if (err) throw err;
     console.log('Result is: \n\n', rows);
  });

console.log("Listening on on 5000");
app.listen(5000);