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

// Test Case #1 : To test mysql connectivity
exports.testMySqlConnectivity = function(test){
	 connection.connect(function(err){
		 if(err) {
		 	test.ok(false, "Error to connect database.");
		  } else {
		    test.ok(true, "Database connected successfully.");
		  }
		  test.done();
	 }); 
};


// Test Case #2 : To check expected value against actulal value.
exports.testRowsCount = function(test){
	 var query = 'SELECT * FROM posts';
		connection.query(query, function(err, rows, fields) {
			var expectedRows = 4;
			var actualRows = rows.length;
			connection.end();
			 if(err) {
			 	test.ok(false, "Error to execute query.");
			 } else {
			 	test.equal(
			 		actualRows, 
			 		expectedRows, 
			 		"Actual result is: "+actualRows +", Expected result is: "+expectedRows
			 	);
			 	
			 }
			 test.done();
		  
	 }); 
		
};

console.log("Listening  on 5000");
app.listen(5000);