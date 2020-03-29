const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error)
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('Executou: ' + sqlQry);
    });
  }

  module.exports = execSQLQuery;