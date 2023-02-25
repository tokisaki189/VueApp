const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "note"
})

/* 
const con = mysql.createConnection({
    host: "gator3215.hostgator.com",
    user: "bitadvis_an",
    password: "Railgun3k.",
    database: "bitadvis_note"
})
 */

module.exports = con;