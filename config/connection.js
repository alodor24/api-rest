const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'api_node'
})

connection.connect(error => {
    if(error) {
        console.log('Error DB: ', error)
        return error
    }
    console.log('established connection...!!')
})

module.exports = connection