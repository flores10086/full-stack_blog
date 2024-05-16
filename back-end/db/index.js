const mysql = require('mysql')
const db = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'hdjz30536',
	database: 'mc'
})


module.exports = db