const express = require("express");

const PORT = 3001;

const app = express();

const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "cpsc471",
    password: "123456",
    database: "placeholderdbname"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Successfully connected to database");
});

//API endpoints go here

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});